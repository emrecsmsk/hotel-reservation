"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import HotelsReducer from "../redux/reducers/HotelsReducer";
import { HotelModel } from "../models/HotelModel";
import HotelCard from "../components/HotelCard";

const FavoriteHotels = () => {

    const dispatch = useDispatch<any>()
    const { hotelsResponse } = useSelector((state: RootState) => state.hotels)

    const onPressFavorite = (id: number) => {
        dispatch(HotelsReducer.changeFavorite(id))
    }

    return (
        <div>
            {
                hotelsResponse &&
                <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 min-h-[632px]">
                    {
                        hotelsResponse.hotels.map((hotel: HotelModel) => {
                            if (hotel.isFavorite === true) {
                                return <HotelCard key={hotel.id} id={hotel.id} image={hotel.photo} name={hotel.name} location={hotel.location} price={hotel.price} isFavorite={hotel.isFavorite} onPressFavorite={onPressFavorite} />
                            }else {
                                return null
                            }
                        }
                        )
                    }
                </div>
            }
        </div>
    )
}

export default FavoriteHotels