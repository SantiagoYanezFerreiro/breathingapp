import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { userSessionsData } from "../../utils/Data";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Your General Stats</h2>
      <div className="dashboard-graph">
        <Line data={userSessionsData} />
      </div>

      <h2>Breathing Holding</h2>
      <div className="dashboard-graph">
        <Line data={userSessionsData} />
      </div>
    </div>
  );
}
