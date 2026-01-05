import { useCallback } from "react";
import { useSearchParams } from "react-router";

export type FiltersTypes = {
  search?: string;
  status?: string;
  priority?: string;
  sortBy?: "asc" | "desc";
  page?: number;
};

export function useArchiveQueryFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const status = searchParams.get("status") ?? "All";
  const priority = searchParams.get("priority") ?? "All";
  const sortBy = (searchParams.get("sortBy") as "asc" | "desc") ?? "desc";

  // URL shows 1-indexed for humans, but your API needs 0-indexed
  const page = Number(searchParams.get("page") ?? 1);

  const setFilters = useCallback(
    (updates: FiltersTypes) => {
      setSearchParams((params) => {
        const keysBeingUpdated = Object.keys(updates);

        // 1. Define what counts as a "Content Filter"
        // Changing these means the total number of results changes.
        const isContentFilterChanging = keysBeingUpdated.some((key) =>
          ["search", "status", "priority"].includes(key)
        );

        // 2. Define what counts as "Navigation/Organization"
        // Changing these doesn't change the result count, just the view.
        const isManualPageChange = keysBeingUpdated.includes("page");
        const isSortChange = keysBeingUpdated.includes("sortBy");

        // 3. Apply all updates to the URL
        keysBeingUpdated.forEach((key) => {
          const value = updates[key as keyof FiltersTypes];
          if (value === undefined || value === "" || value === "All") {
            params.delete(key);
          } else {
            params.set(key, String(value));
          }
        });

        // 4. THE LOGIC GATE:
        // Reset to page 1 ONLY if search/status/priority changed...
        // AND the user isn't currently trying to change the page or sort order.
        // if (isContentFilterChanging && !isManualPageChange && !isSortChange) {
        //   params.set("page", "1");
        // }

        return params;
      });
    },
    [setSearchParams]
  );

  const resetFilters = useCallback(() => {
    setSearchParams((params) => {
      // List all keys that are "filters"
      const filtersToClear = ["search", "status", "priority", "sortBy", "page"];

      filtersToClear.forEach((key) => params.delete(key));

      // workspaceId stays safe because we didn't delete it!
      return params;
    });
  }, [setSearchParams]);

  return {
    search,
    status,
    priority,
    sortBy,
    page,
    setFilters,
    resetFilters,
  };
}
