import axios from "axios";

export const fetchUsers = async () => {
    try {
        const users = await axios.get('https://645fa5a1ca2d89f7e74af958.mockapi.io/users');
        return users.data;    
    }catch (error) {
        console.error("Error fetching data from server: " + error);
        throw error;
    }       
}