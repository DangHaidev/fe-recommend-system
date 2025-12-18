`` 
import StatsCard from '@/src/components/admin/StatsCard';
import Dashbox from '@/src/components/admin/Dashbox';
import DataTable from '@/src/components/admin/DataTable';

const topItems = [
  { id: 321, title: "I Dream in Another Language", category: "Movie", rating: 9.2 },
  { id: 54, title: "Benched", category: "Movie", rating: 9.1 },
  { id: 670, title: "Whitney", category: "TV Show", rating: 9.0 },
  { id: 241, title: "Blindspotting 2", category: "TV Show", rating: 8.9 },
  { id: 22, title: "Blindspotting", category: "TV Show", rating: 8.9 },
];

const latestItems = [
  { id: 26, title: "I Dream in Another Language", category: "Movie", status: "Visible" },
  { id: 25, title: "Benched", category: "Movie", status: "Visible" },
  { id: 24, title: "Whitney", category: "TV Show", status: "Visible" },
  { id: 23, title: "Blindspotting 2", category: "TV Show", status: "Visible" },
  { id: 22, title: "Blindspotting", category: "TV Show", status: "Visible" },
];

const latestUsers = [
  { id: 23, fullName: "Brian Cranston", email: "bcxwz@email.com", username: "BrianXWZ" },
  { id: 22, fullName: "Jesse Plemons", email: "jess@email.com", username: "Jesse.P" },
  { id: 21, fullName: "Matt Jones", email: "matt@email.com", username: "Matty" },
  { id: 20, fullName: "Tess Harper", email: "harper@email.com", username: "Harper123" },
  { id: 19, fullName: "Jonathan Banks", email: "bank@email.com", username: "Jonathan" },
];

const latestReviews = [
  { id: 51, item: "I Dream in Another Language", author: "Jonathan Banks", rating: 7.2 },
  { id: 50, item: "Benched", author: "Charles Baker", rating: 6.3 },
  { id: 49, item: "Whitney", author: "Matt Jones", rating: 8.4 },
  { id: 48, item: "Blindspotting", author: "Jesse Plemons", rating: 9.0 },
  { id: 47, item: "I Dream in Another Language", author: "Brian Cranston", rating: 7.7 },
];

export default function DashboardPage() {
  return (
    <main className="main">
      <div className="container-fluid">
        <div className="row">
          {/* Main Title */}
          <div className="col-12">
            <div className="main__title">
              <h2>Dashboard</h2>
              <a href="/admin/add-item" className="main__title-link">add item</a>
            </div>
          </div>

            {/* Stats */}
            <div className="col-12 col-sm-6 col-xl-3">
              <StatsCard title="Unique views this month" value="5 678" icon="eye" />
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <StatsCard title="Items added this month" value="172" icon="grid" />
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <StatsCard title="New comments" value="2 573" icon="comment" />
            </div>

            <div className="col-12 col-sm-6 col-xl-3">
              <StatsCard title="New reviews" value="1 021" icon="star" />
            </div>

          {/* Dashboxes */}
          <div className="col-12 col-xl-6">
            <Dashbox title="Top items" icon="chart">
              <DataTable columns={["ID", "TITLE", "CATEGORY", "RATING"]} rows={topItems} />
            </Dashbox>
          </div>

          <div className="col-12 col-xl-6">
            <Dashbox title="Latest items" icon="grid">
              <DataTable columns={["ID", "TITLE", "CATEGORY", "STATUS"]} rows={latestItems} />
            </Dashbox>
          </div>

          <div className="col-12 col-xl-6">
            <Dashbox title="Latest users" icon="users">
              <DataTable columns={["ID", "FULL NAME", "EMAIL", "USERNAME"]} rows={latestUsers} />
            </Dashbox>
          </div>

          <div className="col-12 col-xl-6">
            <Dashbox title="Latest reviews" icon="star">
              <DataTable columns={["ID", "ITEM", "AUTHOR", "RATING"]} rows={latestReviews} />
            </Dashbox>
          </div>
        </div>
      </div>
    </main>
  );
}