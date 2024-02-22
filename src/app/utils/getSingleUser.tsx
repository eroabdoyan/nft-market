// import { cache } from 'react';
// import { fetchData } from './fetchData';
// import { User } from '@/app/interface/types';

// export const preload = (username: string) => {
//   void getSingleUser(username);
// };

// export const getSingleUser = cache(async (username: string): Promise<User | null> => {
//   try {
//     const data = await fetchData();
//     console.log("Fetched data:", data); // Log the fetched data
//     const user = data.users.find((user) => user.username === username);
//     console.log("Found user:", user); // Log the found user
//     return user || null; // Return null if user is not found
//   } catch (error) {
//     console.error("Error fetching data: " + error);
//     return null; // Handle the error or return a default value
//   }
// });

import { cache } from 'react'
import 'server-only'
 
export const preload = async (username: string) => {
  return await getSingleUser(username);
};
 
export const getSingleUser = cache(async (username: string) => {
  return username
})

