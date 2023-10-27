import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        data: [],
        search: "",
        favourite: [],
        countFavourite: 0
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            console.log(state.data);
        },
        setDoSearch: (state, action) => {
            state.search = action.payload;
        },
        setFavourite: (state, action) => {
            state.countFavourite += 1;
            state.favourite.push({...state.data?.results?.find(item => item.id === action.payload)});
            state.data.results.push({...state.data?.results?.find(item => item.id === action.payload), heartValue: false});
            // state.favourite.results.msYegane !==  state.favourite.results.msYegane
            // console.log(state.favourite.results.msYegane);

        },
        setHandleFavouriteDelete: (state, action) => {
            state.favourite = state.favourite.filter( item => item.id !== action.payload);
            state.countFavourite -= 1;
        },
        
    }
})

export const { setData, setDoSearch, setFavourite, setHandleFavouriteDelete  } = counterSlice.actions;
export default counterSlice.reducer

