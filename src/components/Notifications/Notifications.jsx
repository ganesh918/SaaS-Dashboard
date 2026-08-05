import "./Notifications.css";
import Sidebar from "../common/Sidebar";

const Notifications = () => {
  return (
    <div className="notifications-page">
      <Sidebar />

      <main className="notifications-main">
        <h1 className="notifications-heading">Notifications</h1>

        <div className="notifications-empty">
          <p>No data found</p>
        </div>
      </main>
    </div>
  );
};

export default Notifications;