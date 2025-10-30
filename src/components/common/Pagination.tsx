import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  // tính số item đang hiển thị
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="row">
      <div className="col-12">
        <div className="catalog__paginator-wrap">
          {/* hiển thị "x-y from total" */}
          <span className="catalog__pages">
            {startItem}-{endItem} from {totalItems}
          </span>

          <ul className="catalog__paginator">
            {/* Nút prev */}
            <li className={currentPage === 1 ? "disabled" : ""}>
              <button
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 5.36475L13.1992 5.36475"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>

            {/* Các trang */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className={page === currentPage ? "active" : ""}>
                <button onClick={() => onPageChange(page)}>{page}</button>
              </li>
            ))}

            {/* Nút next */}
            <li className={currentPage === totalPages ? "disabled" : ""}>
              <button
                onClick={() =>
                  currentPage < totalPages && onPageChange(currentPage + 1)
                }
                disabled={currentPage === totalPages}
              >
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1992 5.3645L0.75 5.3645"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;