import { Container, Grid, Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  TASK_ANALYTICS_DASHBOARD,
  TASK_PROGRESS_OVER_TIME,
  TASK_DISTRIBUTION,
  TASK_STATUS_OVERSVIEW,
  USER_TASK_ANALYSIS,
} from "../resources/data.json";

const taskData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Task ${i + 1}`,
  status: ["Pending", "In Progress", "Completed"][i % 3],
  eta: new Date(
    new Date().setDate(new Date().getDate() + (i % 7))
  ).toLocaleDateString(),
  progress: Math.floor(Math.random() * 100),
  assignedTo: [`User ${i % 5}`, `User ${(i + 1) % 5}`][i % 2],
}));

const lineData = taskData.map((task) => ({
  name: task.name,
  progress: task.progress,
}));

const pieData = [
  {
    name: "Pending",
    value: taskData.filter((t) => t.status === "Pending").length,
  },
  {
    name: "In Progress",
    value: taskData.filter((t) => t.status === "In Progress").length,
  },
  {
    name: "Completed",
    value: taskData.filter((t) => t.status === "Completed").length,
  },
];

const radarData = [
  { subject: "User 1", Pending: 10, Completed: 20, InProgress: 15 },
  { subject: "User 2", Pending: 20, Completed: 25, InProgress: 10 },
  { subject: "User 3", Pending: 15, Completed: 30, InProgress: 5 },
  { subject: "User 4", Pending: 5, Completed: 15, InProgress: 25 },
];

const AnalyticsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {TASK_ANALYTICS_DASHBOARD}
      </Typography>
      <Grid container spacing={4}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {TASK_PROGRESS_OVER_TIME}
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={lineData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="progress" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {TASK_DISTRIBUTION}
            </Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name} (${entry.value})`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={["#FF5733", "#33B5FF", "#33FF57"][index % 3]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {TASK_STATUS_OVERSVIEW}
            </Typography>
            <BarChart width={500} height={300} data={pieData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Radar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              {USER_TASK_ANALYSIS}
            </Typography>
            <RadarChart
              cx={250}
              cy={150}
              outerRadius={100}
              width={500}
              height={300}
              data={radarData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Pending"
                dataKey="Pending"
                stroke="#FF5733"
                fill="#FF5733"
                fillOpacity={0.6}
              />
              <Radar
                name="Completed"
                dataKey="Completed"
                stroke="#33B5FF"
                fill="#33B5FF"
                fillOpacity={0.6}
              />
              <Radar
                name="InProgress"
                dataKey="InProgress"
                stroke="#FFC300"
                fill="#FFC300"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
