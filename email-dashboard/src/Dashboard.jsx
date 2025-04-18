import SendEmail from "./components/SendEmail";
import TrackEmail from "./components/TrackEmail";
import Notifications from "./components/Notifications";
import './App.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Email Dashboard</h1>
      <div className="grid">
        <SendEmail />
        <TrackEmail />
        <Notifications />
      </div>
    </div>
  );
}
