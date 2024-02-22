export interface User {
    userId: number;
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userImg: string;
    countSold: number;
    following: string[];
    followers: string[];
    likes: number;
}

export interface UserIn {
    username: string;
    password: string;
}

export interface NFT {
    id: string;
    name: string;
    image: string;
    username: string;
    price: string;
    category: string;
    description: string;
    score: number;
    quality: string;
    community_engagement: number;
    date: string;
}

export interface Category {
    category: string;
    image: string;
}

export interface BestNFT {
    id: string;
    name: string;
    image: string;
    score: number;
}

export interface Data {
    categories: Category[];
    users: User[];
    nfts: NFT[];
    best_nfts: NFT[];
}