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
        Object.entries(updates).forEach(([key, value]) => {
          if (value === undefined || value === "" || value === "All") {
            params.delete(key);
          } else {
            params.set(key, String(value));
          }
        });
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
