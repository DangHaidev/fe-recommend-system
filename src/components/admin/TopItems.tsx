// src/components/admin/TopItems.tsx
import DataTable from './DataTable';

const columns = ["ID", "TITLE", "CATEGORY", "RATING"];
const rows = [
  { id: 321, title: "I Dream in Another Language", category: "Movie", rating: 9.2 },
  { id: 54, title: "Benched", category: "Movie", rating: 9.1 },
  // ... thêm dữ liệu
];

export default function TopItems() {
  return (
    <div className="dashbox">
      <div className="dashbox__title">
        <h3>Top items</h3>
        <div className="dashbox__wrap">
          <a className="dashbox__refresh" href="#"><svg /* refresh icon */ /></a>
          <a className="dashbox__more" href="/admin/catalog">View All</a>
        </div>
      </div>
      <div className="dashbox__table-wrap dashbox__table-wrap--1">
        <DataTable columns={columns} rows={rows} type="rating" />
      </div>
    </div>
  );
}