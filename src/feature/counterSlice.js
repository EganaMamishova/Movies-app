import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        data: "",
        search: ""
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setDoSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setData, setDoSearch } = counterSlice.actions;
export default counterSlice.reducer

