"use client";

interface ExplorePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ExplorePagination({
  currentPage,
  totalPages,
  onPageChange,
}: ExplorePaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  // Gera as páginas visíveis
  const getPages = (): (number | "...")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: (number | "...")[] = [1];

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) {
      pages.push("...");
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(page);
    }

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = getPages();

  return (
    <nav
      aria-label="Paginação das tours"
      className="relative z-50 mt-12 flex items-center justify-center gap-2"
    >
      {/* Botão anterior */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Anterior
      </button>

      {/* Páginas */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 py-2 text-sm text-neutral-500"
              >
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              type="button"
              aria-current={isActive ? "page" : undefined}
              onClick={() => onPageChange(page)}
              className={`min-w-10 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-primary hover:bg-primary/5"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Botão próxima */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Próxima
      </button>
    </nav>
  );
}
