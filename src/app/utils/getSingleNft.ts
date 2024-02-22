
// import { cache } from 'react'
// import 'server-only'
// import { fetchData } from './fetchData'
// import { NFT } from '../interface/types'
 
// export const preload = (id: string) => {
//   void getSingleNft(id)
// }
 
// export const getSingleNft = cache(async (id: string): Promise<NFT | undefined> => {
//     try {
//       const response = await fetchData();
//       const nft = response.nfts.find(res => res.id === id);
  
//       if (nft) {
//         return nft;
//       } else {
//         console.warn('No matching NFT found for id:', id);
//         return undefined;
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       return undefined;
//     }
//   });
  

import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void getSingleNft(id)
}
 
export const getSingleNft = cache(async (id: string) => {
  return id
})

