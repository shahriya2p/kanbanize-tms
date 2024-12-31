import { Routes, Route } from "react-router-dom";
import KanbanBoard from "./components/KanbanBoard";
import Analytics from "./pages/Analytics";
import TaskTable from "./components/Task/TaskTable";
import TaskForm from "./components/Task/TaskForm";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/profilePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/kanban" element={<KanbanBoard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/task-list" element={<TaskTable />} />
      <Route path="/create-task" element={<TaskForm />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
export default Router;
