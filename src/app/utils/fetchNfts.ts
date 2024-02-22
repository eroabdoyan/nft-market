import axios from "axios";

export const fetchNfts = async () => {
    try {
        const nfts = await axios.get('https://645fa5a1ca2d89f7e74af958.mockapi.io/nfts');
        return nfts.data;    
    }catch (error) {
        console.error("Error fetching data from server: " + error);
        throw error;
    }       
}