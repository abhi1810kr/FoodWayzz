import "./Home.css";
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import { useState, useContext } from "react";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import AppDownload from "../../components/appDownload/AppDownload";
import { StoreContext } from "../../context/storeContext";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { loading } = useContext(StoreContext);
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      {loading ? <Loading /> : <FoodDisplay category={category} />}
      <AppDownload />
    </div>
  );
};

export default Home;
