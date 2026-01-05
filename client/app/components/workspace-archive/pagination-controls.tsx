import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PaginationControlsProps {
  currentPage: number;
  prevPage?: number;
  nextPage?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const PaginationControls = ({
  currentPage,
  totalPages,
  prevPage,
  nextPage,
  onPageChange,
}: PaginationControlsProps) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <Button
        size={"icon"}
        onClick={() => onPageChange(prevPage! + 1)}
        className={cn(
          prevPage === undefined
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        )}
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div className="flex items-center gap-3">
        {[...Array(totalPages)].map((_, index) => (
          <Button
            variant={currentPage === index ? "default" : "outline"}
            size={"icon"}
            key={index}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>

      <Button
        size={"icon"}
        onClick={() => onPageChange(nextPage! + 1)}
        className={cn(
          nextPage === undefined
            ? "opacity-50 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        )}
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
};
