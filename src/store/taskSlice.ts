import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'inProgress' | 'qa' | 'rca' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignedUserId: string | null;
}

const initialState: {
  tasks: Task[];
} = {
  tasks: [],
};

const taskSlice = createSlice({
  initialState,
  name: "taskSlice",
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== Number(action.payload));
    },
    // assignUserToTask: (state, action: PayloadAction<{ taskId: string; userId: string | null }>) => {
    //   const task = state.tasks.find((t) => t.id === action.payload.taskId);
    //   if (task) {
    //     task.assignedUserId = action.payload.userId;
    //   }
    // },
    assignUserToTask: (
      state,
      action: PayloadAction<{ taskId: string; userId: string | null }>
    ) => {
      const { taskId, userId } = action.payload;
      const task = state.tasks.find((task) => task.id === Number(taskId));
      if (task) {
        task.assignedUserId = userId;
      }
    },

    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
  },
})

export const { addTask, editTask, deleteTask, assignUserToTask, updateTask } = taskSlice.actions
export default taskSlice.reducer