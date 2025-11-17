// app/admin/users/page.tsx
import UsersTable from "@/src/components/admin/UsersTable";

export default function UsersPage() {
  return (
    <main className="main">               {/* THÊM DÒNG NÀY LÀ ĐẸP NGAY! */}
      <div className="container-fluid">
        <div className="row">

          {/* Title + Sort + Search */}
          <div className="col-12">
            <div className="main__title">
              <h2>Users</h2>
              <span className="main__title-stat">3 702 total</span>

              <div className="main__title-wrap">
                <div className="filter" id="filter__sort">
                  <span className="filter__item-label">Sort by:</span>
                  <div className="filter__item-btn dropdown-toggle" role="button">
                    <input type="button" defaultValue="Date created" />
                    <span></span>
                  </div>
                  <ul className="filter__item-menu dropdown-menu scrollbar-dropdown">
                    <li>Date created</li>
                    <li>Pricing plan</li>
                    <li>Status</li>
                  </ul>
                </div>

                <form action="#" className="main__title-form">
                  <input type="text" placeholder="Find user.." />
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

          {/* Table */}
          <div className="col-12">
            <UsersTable />
          </div>

          {/* Paginator */}
          <div className="col-12">
            <div className="paginator">
              <span className="paginator__pages">10 from 3 702</span>
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