import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { IconFileBroken } from "@tabler/icons-react";
import { ArrowUpRightIcon, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconFileBroken />
          </EmptyMedia>
          <EmptyTitle>404 — Page Not Found</EmptyTitle>
          <EmptyDescription>
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Double-check the URL or head back to safety.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/workspaces">
              <Plus /> Create a Workspace
            </Link>
          </Button>
        </EmptyContent>
        <Button variant="link" className="text-muted-foreground" size="sm">
          Report an Issue <ArrowUpRightIcon />
        </Button>
      </Empty>
    </div>
  );
}
