import Header from "@/components/layout/header";
import AppSidebar from "@/components/layout/sidebar";
import Loader from "@/components/loader";
import { CreateWorkspace } from "@/components/workspace/create-workspace";
import { getData } from "@/lib/fetch-utils";
import { useAuth } from "@/provider/auth-context";
import type { WorkSpace } from "@/types";
import { useEffect, useState } from "react";
import { Outlet, redirect, useNavigate } from "react-router";
import { toast } from "sonner";

export const clientLoader = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return { workspaces: [] };
  }

  try {
    const [workspaces] = await Promise.all([getData("/workspaces")]);
    return { workspaces: workspaces || [] };
  } catch (error) {
    console.log(error);
  }
};

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();
  const [isCreatingWorkspace, setIsCreatingWorkspace] =
    useState<boolean>(false);
  const [currentWorkspace, setCurrentWorkspace] = useState<WorkSpace | null>(
    null,
  );

  const handleWorkspaceSelected = (workspace: WorkSpace) => {
    setCurrentWorkspace(workspace);
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error("Session expired. Please log in again.", {
        id: "auth-status",
      });
      navigate("/sign-in");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen w-full ">
      <AppSidebar currentWorkspace={currentWorkspace} />
      <div className="flex flex-1 flex-col h-full">
        <Header
          onWorkspaceSelected={handleWorkspaceSelected}
          selectedWorkspace={currentWorkspace}
          onCreateWorkspace={() => setIsCreatingWorkspace(true)}
        />
        <main className="flex-1 overflow-y-auto w-full h-full no-scrollbar">
          <div className="mx-auto container px-2 sm:px-6 lg:px-8 py-0 md:py-8 w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>

      <CreateWorkspace
        isCreatingWorkspace={isCreatingWorkspace}
        setIsCreatingWorkspace={setIsCreatingWorkspace}
      />
    </div>
  );
};

export default DashboardLayout;
