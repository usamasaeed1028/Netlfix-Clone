import { async } from "@firebase/util";
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  generesLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("netlfix/genres", async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const tmdbApi = process.env.REACT_APP_TMDB_BASE_URL;
  const {
    data: { genres },
  } = await axios.get(`${tmdbApi}/genre/movie/list?api_key=${apiKey}`);
  console.log(genres);
  return genres;
});

const getRawData = async (api, genres, paging) => {
    const moviesArray = [];
    for(let i=1; moviesArray.length<60 && i<10; i++){
      const {data: results} =   await axios.get(`${api}`);   
    }
};

export const getMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();
    const apiKey = process.env.REACT_APP_API_KEY;
    const tmdbApi = process.env.REACT_APP_TMDB_BASE_URL;
    return getRawData(
      `${tmdbApi}/trending/${type}/week?api_key=${apiKey}`,
      genres,
      true
    );
  }
);
// return getRawData(`${tmdbApi}/discover/${type}?apikey=${apiKey}&with_genres=${genres}`);

const NetlfixSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.generesLoaded = true;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: NetlfixSlice.reducer,
  },
});
