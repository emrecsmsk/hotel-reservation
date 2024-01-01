"use client"

import { useDispatch, useSelector } from "react-redux";
import HotelsReducer from "./redux/reducers/HotelsReducer";
import { RootState } from "./redux/store";
import HotelCard from "./components/HotelCard";
import { HotelModel } from "./models/HotelModel";
import { ChangeEvent, Key, useEffect, useState } from "react";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";


const Home = () => {

  const dispatch = useDispatch<any>()
  const { hotelsResponse } = useSelector((state: RootState) => state.hotels)
  const [selectedCity, setSelectedCity] = useState("All")
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const getHotels = () => {
      dispatch(HotelsReducer.getHotels())
    }
    getHotels()
  }, [])

  const onChangeCity = (e: Key) => {
    if (e !== null) {
      setSelectedCity(e.toString())
    } else {
      setSelectedCity("All")
    }
  }

  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const onPressFavorite = (id: number) => {
    dispatch(HotelsReducer.changeFavorite(id))
  }

  return (
    <div>
      {
        hotelsResponse &&
        <>
          <div className="flex m-3 gap-3 sm:flex-row flex-col">
            <Input
              label="Search"
              radius="lg"
              placeholder="Type to search..."
              onChange={onChangeSearchText}
              startContent={
                <FaSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Autocomplete
              defaultItems={hotelsResponse.cities}
              label="Search City"
              onSelectionChange={onChangeCity}
            >
              {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
            </Autocomplete>
          </div>
          <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 min-h-[632px]">
            {
              hotelsResponse.hotels.map((hotel: HotelModel) => {
                if (selectedCity === "All" && hotel.name.toLowerCase().includes(searchText.toLowerCase())) {
                  return <HotelCard key={hotel.id} id={hotel.id} image={hotel.photo} name={hotel.name} location={hotel.location} price={hotel.price} isFavorite={hotel.isFavorite} onPressFavorite={onPressFavorite} />
                } else if (hotel.location === selectedCity) {
                  return <HotelCard key={hotel.id} id={hotel.id} image={hotel.photo} name={hotel.name} location={hotel.location} price={hotel.price} isFavorite={hotel.isFavorite} onPressFavorite={onPressFavorite} />
                } else {
                  return null
                }
              }
              )
            }
          </div>
        </>
      }
    </div >
  )
}

export default Home