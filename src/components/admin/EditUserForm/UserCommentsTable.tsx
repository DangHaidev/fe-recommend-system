// components/admin/EditUserForm/UserCommentsTable.tsx
export default function UserCommentsTable() {
  return (
    <div className="main__table-wrap">
      <table className="main__table">
        <thead>
          <tr>
            <th>ID</th><th>ITEM</th><th>AUTHOR</th><th>TEXT</th><th>LIKE / DISLIKE</th><th>CREATED DATE</th><th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {/* Dữ liệu mẫu – sau này map từ API */}
          {Array.from({ length: 10 }, (_, i) => (
            <tr key={i}>
              <td><div className="main__table-text">{23 + i}</div></td>
              <td><div className="main__table-text"><a href="#">I Dream in Another Language</a></div></td>
              <td><div className="main__table-text">John Doe</div></td>
              <td><div className="main__table-text">Lorem Ipsum is simply dummy text...</div></td>
              <td><div className="main__table-text">12 / 7</div></td>
              <td><div className="main__table-text">24 Oct 2021</div></td>
              <td>
                <div className="main__table-btns">
                  <a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">View</a>
                  <a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">Delete</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}