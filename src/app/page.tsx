import CurrentlyNfts from "./components/CurrentlyNFTs/CurrentlyNfts";
import Banner from "./components/banner/Banner";
import CategoriesCollections from "./components/categoriesCollections/categories.collections";
import CreateNFT from "./components/createNFTs/HowCreateNFT";
import Footer from "./components/footer/Footer";
import { UserProvider } from "./context/UserContext";

const Home = () => {
  return (
    <main className="bg-[url('/images/dark-bg.jpg')] h-full">
      <UserProvider>
        <Banner />
      </UserProvider>
      
      <CategoriesCollections />
      <CreateNFT />
      <CurrentlyNfts />
      <Footer />  
    </main>
  )
}

export default Home;
