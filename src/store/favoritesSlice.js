import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        films: []
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const film = action.payload
            const exists = state.films.find(f => f.filmId === film.filmId)

            if (exists) {
                state.films = state.films.filter(f => f.filmId !== film.filmId)
            } else {
                state.films.push(film)
            }
        }
    }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer