import Loader from "@/components/loader";
import { NoDataFound } from "@/components/no-data-found";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArchiveProjects } from "@/components/workspace-archive/archived-projects";
import { ArchivedTasks } from "@/components/workspace-archive/archived-tasks";
import { PaginationControls } from "@/components/workspace-archive/pagination-controls";
import { useArchiveQueryFilters } from "@/hooks/use-archive-query-filters";
import { useDebounce } from "@/hooks/use-debounce";
import {
  useGetWorkspaceProjectArchive,
  useGetWorkspaceTaskArchive,
} from "@/hooks/use-workspace";
import type { Project, Task } from "@/types";
import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const WorkspaceArchive = () => {
  const [searchParams] = useSearchParams();
  const workspaceId = searchParams.get("workspaceId");
  const [isTaskArchive, setIsTaskArchive] = useState<boolean>(false);
  const [localSearch, setLocalSearch] = useState<string>("");

  const { search, status, priority, sortBy, page, setFilters, resetFilters } =
    useArchiveQueryFilters();

  const debouncedSearch = useDebounce(localSearch, 500);

  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  useEffect(() => {
    setFilters({ search: debouncedSearch });
  }, [debouncedSearch, setFilters]);

  useEffect(() => {
    if (!workspaceId) return;

    resetFilters();
    setLocalSearch("");
  }, [workspaceId]);

  const { data: projects, isPending: projectIsPending } =
    useGetWorkspaceProjectArchive(
      workspaceId as string,
      {
        page,
        search,
        status,
        sortBy,
      },
      !isTaskArchive
    ) as {
      data: {
        data: Project[];
        page: number;
        total: number;
        totalPages: number;
        nextPage?: number;
        prevPage?: number;
      };
      isPending: boolean;
    };

  const { data: tasks, isPending: taskIsPending } = useGetWorkspaceTaskArchive(
    workspaceId as string,
    { page, search, status, priority, sortBy },
    isTaskArchive
  ) as {
    data: {
      data: Task[];
      page: number;
      total: number;
      totalPages: number;
      nextPage?: number;
      prevPage?: number;
    };
    isPending: boolean;
  };

  const selectPageHandler = (pageNumber: number) => {
    setFilters({ page: pageNumber });
  };

  if (!workspaceId)
    return (
      <NoDataFound
        title="No Workspace Selected"
        description="Please select a workspace to view its archived projects and tasks. use the workspace switcher to pick one and continue."
        className="mt-6"
      />
    );

  return (
    <div className="py-6 space-y-5">
      <div className="w-full md:max-w-2xl">
        <p className="text-xl font-semibold text-primary">Archive</p>
        <p className="text-sm text-muted-foreground font-medium">
          Access all archived projects and tasks within this workspace. Archived
          items are kept for references and can be restored at any time
        </p>
      </div>

      <div className="transition-transform ease-in-out duration-300">
        {!isTaskArchive ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-border rounded-full px-2 py-2 w-full md:max-w-md">
              <Search className="size-5 text-muted-foreground" />
              <input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search archived projects"
                className="w-full outline-none text-sm"
              />
            </div>
            <Button
              variant={"outline"}
              size={"icon"}
              className="text-primary cursor-pointer shadow-none rounded-full"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SlidersHorizontal className="size-5 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-3 md:mr-47 mt-3 w-56 pb-3">
                  <DropdownMenuLabel>Filter Projects</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex-col items-start justify-normal focus:bg-transparent">
                    <p>Status: </p>
                    <Select
                      defaultValue={status}
                      onValueChange={(value) => {
                        setFilters({ status: value });
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Planning">Planning</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="On Hold">On Hold</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex-col items-start justify-normal focus:bg-transparent">
                    <p>Sort By:</p>
                    <Select
                      defaultValue={sortBy}
                      onValueChange={(value) => {
                        setFilters({ sortBy: value as "asc" | "desc" });
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="desc">
                          Newest <ArrowRight className="inline" /> Oldest
                        </SelectItem>
                        <SelectItem value="asc">
                          Oldest <ArrowRight className="inline" /> Newest
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-border rounded-full px-2 py-2 w-full md:max-w-md">
              <Search className="size-5 text-muted-foreground" />
              <input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search archived tasks"
                className="w-full outline-none text-sm"
              />
            </div>
            <Button
              variant={"outline"}
              size={"icon"}
              className="text-primary cursor-pointer shadow-none rounded-full"
            >
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <SlidersHorizontal className="size-5 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-3 md:mr-47 mt-3 w-56 pb-3">
                  <DropdownMenuLabel>Filter Tasks</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex-col items-start justify-normal focus:bg-transparent">
                    <p>Status: </p>
                    <Select
                      defaultValue={status}
                      onValueChange={(value) => {
                        setFilters({ status: value });
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="To Do">To Do</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Done">Done</SelectItem>
                      </SelectContent>
                    </Select>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex-col items-start justify-normal focus:bg-transparent">
                    <Select
                      defaultValue={priority}
                      onValueChange={(value) => {
                        setFilters({ priority: value });
                      }}
                    >
                      <p>Priority: </p>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex-col items-start justify-normal focus:bg-transparent">
                    <p>Sort By:</p>
                    <Select
                      defaultValue={sortBy}
                      onValueChange={(value) => {
                        setFilters({ sortBy: value as "asc" | "desc" });
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="desc">
                          Newest <ArrowRight className="inline" /> Oldest
                        </SelectItem>
                        <SelectItem value="asc">
                          Oldest <ArrowRight className="inline" /> Newest
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Button>
          </div>
        )}
      </div>

      <Tabs defaultValue="projects" className="mt-5">
        <TabsList>
          <TabsTrigger
            value="projects"
            onClick={() => {
              setIsTaskArchive(false);
              resetFilters();
              setLocalSearch("");
            }}
          >
            Archived Projects
          </TabsTrigger>
          <TabsTrigger
            value="tasks"
            onClick={() => {
              setIsTaskArchive(true);
              resetFilters();
              setLocalSearch("");
            }}
          >
            Archived Tasks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          {projectIsPending ? (
            <Loader />
          ) : projects.data && projects.data.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
              {projects.data.map((project) => (
                <ArchiveProjects
                  key={project._id}
                  project={project}
                  workspaceId={workspaceId}
                />
              ))}

              {projects.totalPages > 1 && <PaginationControls />}
            </div>
          ) : (
            <NoDataFound
              title="No Archived Projects"
              description="There are no archived projects in this workspace."
              className="mt-6"
            />
          )}
        </TabsContent>
        <TabsContent value="tasks">
          {taskIsPending ? (
            <Loader />
          ) : tasks.data && tasks.data.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 lg:grid-cols-3">
              {tasks.data.map((task) => (
                <ArchivedTasks
                  key={task._id}
                  task={task}
                  workspaceId={workspaceId}
                />
              ))}
              {tasks.totalPages > 1 && (
                <PaginationControls
                  totalPages={tasks.totalPages}
                  nextPage={tasks.nextPage}
                  prevPage={tasks.prevPage}
                  currentPage={tasks.page}
                  onPageChange={selectPageHandler}
                />
              )}
            </div>
          ) : (
            <NoDataFound
              title="No Archived Tasks"
              description="There are no archived tasks in this workspace."
              className="mt-6"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkspaceArchive;
