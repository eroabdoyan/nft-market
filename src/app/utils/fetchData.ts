import axios from "axios";
import { Data } from "../interface/types";

export const fetchData = async (): Promise<Data> => {
    try {
        const response = await axios.get('/data.json');
        return response.data;    
    }catch (error) {
        console.error("Error fetching data from server: " + error);
        throw error;
    }       
}