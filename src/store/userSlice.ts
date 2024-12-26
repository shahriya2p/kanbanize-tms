import { createSlice } from "@reduxjs/toolkit";
import { dummyUsers } from "../data";

export interface User {
    id: number;
    name: string;
    initials: string;
    color: string;
}

const initialState: {
    users: User[]
} = {
    users: dummyUsers,
}

const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload
        },
    }
})

export const { getUser } = userSlice.actions
export default userSlice.reducer