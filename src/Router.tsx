import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./components/KanbanBoard";
import Analytics from "./pages/Analytics";
import TaskTable from "./components/Task/TaskTable";
import TaskForm from "./components/Task/TaskForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<KanbanBoard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/task-list" element={<TaskTable />} />
      <Route path="/create-task" element={<TaskForm />} />
    </Routes>
  );
};
export default Router;
