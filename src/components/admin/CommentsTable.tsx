// src/components/admin/CommentsTable.tsx
const comments = [
  { id: 23, item: "I Dream in Another Language", author: "Jonathan Banks", text: "Lorem Ipsum is simply dummy text...", likes: 12, dislikes: 7, date: "24 Oct 2021" },
  { id: 24, item: "Benched", author: "John Doe", text: "Lorem Ipsum is simply dummy text...", likes: 67, dislikes: 22, date: "24 Oct 2021" },
  { id: 25, item: "Whitney", author: "Brian Cranston", text: "Lorem Ipsum is simply dummy text...", likes: 44, dislikes: 5, date: "24 Oct 2021" },
  { id: 26, item: "Blindspotting", author: "Jesse Plemons", text: "Lorem Ipsum is simply dummy text...", likes: 20, dislikes: 6, date: "24 Oct 2021" },
  { id: 27, item: "I Dream in Another Language", author: "John Doe", text: "Lorem Ipsum is simply dummy text...", likes: 8, dislikes: 132, date: "24 Oct 2021" },
  { id: 28, item: "Benched", author: "Jonathan Banks", text: "Lorem Ipsum is simply dummy text...", likes: 6, dislikes: 1, date: "24 Oct 2021" },
  { id: 29, item: "Whitney", author: "Tess Harper", text: "Lorem Ipsum is simply dummy text...", likes: 10, dislikes: 0, date: "24 Oct 2021" },
  { id: 30, item: "Blindspotting", author: "Matt Jones", text: "Lorem Ipsum is simply dummy text...", likes: 13, dislikes: 14, date: "24 Oct 2021" },
] as const;

export default function CommentsTable() {
  return (
    <div className="main__table-wrap">
      <table className="main__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ITEM</th>
            <th>AUTHOR</th>
            <th>TEXT</th>
            <th>LIKE / DISLIKE</th>
            <th>CREATED DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id} className="main__table-tr">
              <td><div className="main__table-text">{c.id}</div></td>
              <td><div className="main__table-text"><a href="#">{c.item}</a></div></td>
              <td><div className="main__table-text">{c.author}</div></td>
              <td><div className="main__table-text">{c.text}</div></td>
              <td><div className="main__table-text">{c.likes} / {c.dislikes}</div></td>
              <td><div className="main__table-text">{c.date}</div></td>
              <td>
                <div className="main__table-btns">
                  <a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
                    </svg>
                  </a>
                  <a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal View */}
      <div id="modal-view" className="zoom-anim-dialog mfp-hide modal modal--view">
        <div className="comments__autor">
          <img className="comments__avatar" src="/img/user.svg" alt="" />
          <span className="comments__name">John Doe</span>
          <span className="comments__time">30.08.2018, 17:53</span>
        </div>
        <p className="comments__text">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...
        </p>
        <div className="comments__actions">
          <div className="comments__rate">
            <span>12 Likes</span>
            <span>7 Dislikes</span>
          </div>
        </div>
      </div>

      {/* Modal Delete */}
      <div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
        <h6 className="modal__title">Comment delete</h6>
        <p className="modal__text">Are you sure to permanently delete this comment?</p>
        <div className="modal__btns">
          <button className="modal__btn modal__btn--apply" type="button">Delete</button>
          <button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
        </div>
      </div>
    </div>
  );
}