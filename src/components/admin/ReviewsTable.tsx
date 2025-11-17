import Link from "next/link";

const mockReviews = Array.from({ length: 20 }, (_, i) => ({
  id: 23 + i,
  item: i % 3 === 0 ? "I Dream in Another Language" : i % 2 === 0 ? "Benched" : "Whitney",
  author: "John Doe",
  text: "Lorem Ipsum is simply dummy text...",
  rating: (5.5 + (i % 50) / 10).toFixed(1),
  likes: Math.floor(Math.random() * 100),
  dislikes: Math.floor(Math.random() * 30),
  date: "24 Oct 2021",
}));

export default function ReviewsTable() {
  return (
    <div className="col-12">
      <div className="main__table-wrap">
        <table className="main__table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ITEM</th>
              <th>AUTHOR</th>
              <th>TEXT</th>
              <th>RATING</th>
              <th>LIKE / DISLIKE</th>
              <th>CREATED DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {mockReviews.map((review) => (
              <tr key={review.id}>
                <td>
                  <div className="main__table-text">{review.id}</div>
                </td>
                <td>
                  <div className="main__table-text">
                    <Link href="#">{review.item}</Link>
                  </div>
                </td>
                <td>
                  <div className="main__table-text">{review.author}</div>
                </td>
                <td>
                  <div className="main__table-text">{review.text}</div>
                </td>
                <td>
                  <div className="main__table-text main__table-text--rate">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/>
                    </svg>{" "}
                    {review.rating}
                  </div>
                </td>
                <td>
                  <div className="main__table-text">
                    {review.likes} / {review.dislikes}
                  </div>
                </td>
                <td>
                  <div className="main__table-text">{review.date}</div>
                </td>
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
      </div>
    </div>
  );
}