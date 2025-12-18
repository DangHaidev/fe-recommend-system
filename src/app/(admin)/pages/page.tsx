// app/admin/pages/add-item/page.tsx
import Link from "next/link";

export default function AddItemPage() {
  return (
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main__title">
              <h2>Add item</h2>
            </div>
          </div>

          <div className="col-12">
            <div className="sign__wrap">
              <p>Đây là trang <strong>Add item</strong> – giống hệt template gốc</p>
              <Link href="/admin/pages" className="sign__btn">Quay lại Pages</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}