import { CityModel } from "./CityModel";
import { HotelModel } from "./HotelModel";

export interface HotelListModel {
    hotels: [HotelModel]
    cities: [CityModel]
}