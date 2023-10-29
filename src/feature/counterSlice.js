import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        data: {},
        search: "",
        favourite: [],
        countFavourite: 0,
        itemToFavourite: {},
        loading: true
    },
    reducers: {
        setData: (state, action) => {
            const apiData = action.payload;
            state.data.results = apiData.results.map(item => ({...item, heartTagValue: false}));
        },
        setDoSearch: (state, action) => {
            state.search = action.payload;
        },
        setFavourite: (state, action) => {
            const itemId = action.payload;
             state.itemToFavourite = state.data.results.find(item => item.id === itemId);
            // state.countFavourite += 1;
            // state.favourite.push({...state.data?.results?.find(item => item.id === action.payload)});

            if (state.itemToFavourite) {
                if (!state.itemToFavourite.heartTagValue) {
                    state.itemToFavourite.heartTagValue = true;
                    state.countFavourite += 1;
                    state.favourite.push( state.itemToFavourite);
                }
            }
           
        },
        setHandleFavouriteDelete: (state, action) => {
            // state.favourite = state.favourite.filter( item => item.id !== action.payload);
            // state.countFavourite -= 1;
            const itemId = action.payload;
            const itemToRemove = state.favourite.find((item) => item.id === itemId);

            if (itemToRemove) {
                itemToRemove.heartTagValue = false; // "kamil" özelliğini false yap
                state.countFavourite -= 1;
                state.favourite = state.favourite.filter((item) => item.id !== itemId);
            }
            console.log({...itemToRemove});
        },
        setLoading:(state, action) => {
            state.loading = false
        }
    },

})

export const { setData, setDoSearch, setFavourite, setHandleFavouriteDelete,  setLoading } = counterSlice.actions;
export default counterSlice.reducer

