import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "store";

const initialState: IInitialStateValue = {
    userName: null,
    email: null,
    isLogin: null,
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IInitialStateValue>) => {
            state = action.payload;
        },
    },
});

export default slice.reducer;

export const { addUser } = slice.actions;

export const getUserState = (state: AppState): typeof initialState => state.user;

interface IInitialStateValue {
    userName: string;
    email: string;
    isLogin: boolean;
}
