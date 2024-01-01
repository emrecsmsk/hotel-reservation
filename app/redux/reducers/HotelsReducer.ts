import { HotelListModel } from "@/app/models/HotelListModel"
import { createSlice } from '@reduxjs/toolkit'
import { db } from '../../../db'

export interface HotelsState {
    hotelsResponse?: HotelListModel,
    favorites?: [number]
    isFirstTime: boolean
}

const initialState: HotelsState = {
    isFirstTime: true
}

const slice = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        setHotels: (state, action) => {
            if (state.isFirstTime){
                state.hotelsResponse = action.payload
                state.isFirstTime = false
            }
        },
        setFavorite: (state, action) => {
            state.favorites?.push(action.payload)
            for (let i = 0; i < state.hotelsResponse!.hotels.length; i++) {
                if (state.hotelsResponse!.hotels[i].id === action.payload) {
                    state.hotelsResponse!.hotels[i].isFavorite = !state.hotelsResponse!.hotels[i].isFavorite
                }
            }
        }
    },
})

const getHotels = () => async (dispatch: any) => {
    const response = db
    dispatch(setHotels(response))
}

const changeFavorite = (id: number) => async (dispatch: any) => {
    dispatch(setFavorite(id))
}

// Action creators are generated for each case reducer function
export const { setHotels, setFavorite } = slice.actions

export default {
    reducer: slice.reducer,
    getHotels,
    changeFavorite
}