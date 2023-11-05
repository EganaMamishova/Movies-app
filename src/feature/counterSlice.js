import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        data: {},
        search: "",
        favourite: [],
        watchlist: [],
        countFavourite: 0,
        countWatchlist: 0,
        itemToFavourite: {},
        itemToRemove: {},
        itemToWatchlist: {},
        itemToRemoveWatchlist:{},
        loading: true
    },
    reducers: {
        setData: (state, action) => {
            const apiData = action.payload;
            state.data.results = apiData.results.map(item => ({ ...item, heartTagValue: false, watchlistValue: false }));
        },
        setDoSearch: (state, action) => {
            state.search = action.payload;
        },
        setFavourite: (state, action) => {
            toast.success('❤️ Added to Favourite List!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            const itemId = action.payload;
            state.itemToFavourite = state.data.results.find(item => item.id === itemId);
            // state.countFavourite += 1;
            // state.favourite.push({...state.data?.results?.find(item => item.id === action.payload)});
            
            if (state.itemToFavourite) {
                if (!state.itemToFavourite.heartTagValue) {
                    state.itemToFavourite.heartTagValue = !state.itemToFavourite.heartTagValue;
                    state.countFavourite += 1;
                    state.favourite.push(state.itemToFavourite);
                }
            }
             
        },
        setHandleFavouriteDelete: (state, action) => {
            toast.error('💔 Removed from Favourite List!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              const itemId = action.payload;
              state.itemToRemove = state.favourite.find((item) => item.id === itemId);
  
              if (state.itemToRemove){
                  state.itemToRemove.heartTagValue = false; 
                  state.countFavourite -= 1;
                  state.favourite = state.favourite.filter((item) => item.id !== itemId);
                  const dataItem = state.data.results.find((item) => item.id === itemId);
                  if (dataItem) {          
                      dataItem.heartTagValue = false;
                  }   
              }
              console.log({...state.itemToRemove});        
        },
        setLoading: (state, action) => {
            state.loading = false
        },
        setWatchlist:(state, action)=> {
            toast.success('📥 Added to WatchList!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            const itemId = action.payload;
            state.itemToWatchlist = state.data.results.find(item => item.id === itemId);
            if (state.itemToWatchlist) {
                if (!state.itemToWatchlist.watchlistValue) {
                    state.itemToWatchlist.watchlistValue = !state.itemToWatchlist.watchlistValue;
                    state.countWatchlist += 1;
                    state.watchlist.push(state.itemToWatchlist);
                }            
            }
        },
        setHandleWatchlistDelete: (state, action)=> {
            toast.error('📤 Removed from WatchList!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            const itemId = action.payload;
              state.itemToRemove = state.watchlist.find((item) => item.id === itemId);
              if (state.itemToRemove){
                  state.itemToRemove.watchlistValue = false; 
                  state.countWatchlist -= 1;
                  state.watchlist = state.watchlist.filter((item) => item.id !== itemId);
                  const dataItem = state.data.results.find((item) => item.id === itemId);
                  if (dataItem) {          
                      dataItem.watchlistValue = false;
                  }   
              }
                 
        }
    },

})

export const { setData, setDoSearch, setFavourite, setHandleFavouriteDelete, setLoading, setWatchlist, setHandleWatchlistDelete } = counterSlice.actions;
export default counterSlice.reducer

