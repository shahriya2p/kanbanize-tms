import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
    initials: string;
    color: string;
}

const initialState: {
    users: User[]
} = {
    users: [],
}

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.users.push(action.payload);
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.users.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id !== +action.payload);
        },
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer