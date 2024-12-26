import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'
import { dummyTasks, taskData } from "../data";

// export interface Task {
//     _id: string
//     description: string
//     status: string
// }

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  assignedUserId: number | null;
}

const initialState: {
  tasks: Task[]
  currentTask: Task | null | undefined
} = {
  tasks: dummyTasks,
  currentTask: null
}

const taskSlice = createSlice({
  initialState,
  name: "taskSlice",
  reducers: {
    getCurrentTask: (state, action) => {
      const Task = state.tasks.find(
        (task) => task.id === action.payload
      )
      const targetTask = { ...Task }
      state.currentTask = targetTask
    },
    setCurrentTask: (state) => {
      state.currentTask = null
    },
    assignUser: (state, action: PayloadAction<{ taskId: number; userId: number }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.taskId);
      if (task) {
        task.assignedUserId = action.payload.userId;
      }
    },
    unassignUser: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.assignedUserId = null;
      }
    },
  },
})

export const { getCurrentTask, setCurrentTask, assignUser, unassignUser } = taskSlice.actions
export default taskSlice.reducer