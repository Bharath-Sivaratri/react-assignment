import React from "react";
import "../components/ListingPage.css";
function Pagination({ totalNews, newsPerpage, currentPage, paginateNews }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalNews / newsPerpage); i++) {
    pages.push(i);
  }

  const handleChangePage = (number) => {
    paginateNews(number);
  };

  return (
    <div className="pagination">
      {pages.map((page) => {
        return (
          <button
            className={page === currentPage ? "active" : "no-active"}
            onClick={() => {
              handleChangePage(page);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
