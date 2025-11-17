// src/app/admin/catalog/page.tsx
import CatalogTable from "@/src/components/admin/CatalogTable";
import Link from "next/link";

export default function CatalogPage() {
  return (
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          {/* main title */}
          <div className="col-12">
            <div className="main__title">
              <h2>Catalog</h2>
              <span className="main__title-stat">14 452 total</span>

              <div className="main__title-wrap">
                {/* filter sort */}
                <div className="filter" id="filter__sort">
                  <span className="filter__item-label">Sort by:</span>
                  <div className="filter__item-btn dropdown-toggle" role="button">
                    <input type="button" defaultValue="Date created" />
                    <span></span>
                  </div>
                  <ul className="filter__item-menu dropdown-menu scrollbar-dropdown">
                    <li>Date created</li>
                    <li>Rating</li>
                    <li>Views</li>
                  </ul>
                </div>

                {/* search */}
                <form action="#" className="main__title-form">
                  <input type="text" placeholder="Find movie / tv series.." />
                  <button type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8.25998" cy="8.25995" r="7.48191" stroke="#2F80ED" strokeWidth="1.5"/>
                      <path d="M13.4637 13.8523L16.3971 16.778" stroke="#2F80ED" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* catalog table */}
          <div className="col-12">
            <CatalogTable />
          </div>

          {/* paginator */}
          <div className="col-12">
            <div className="paginator">
              <span className="paginator__pages">10 from 14 452</span>
              <ul className="paginator__paginator">
                <li><a href="#">«</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}