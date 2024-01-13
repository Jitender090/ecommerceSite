import { useState, useContext, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import {store} from './Store/store'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Sec_3 from "./components/Sec_3";
import Productdetail from "./components/Productdetail";
import Description from "./components/pages/Description";
import Review from "./components/pages/Review";
import Policy from "./components/pages/Policy";
import { Cart } from "./components/pages/Cart";
import Error from "./components/Error";

function App() {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState(userData);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setUserData(data);
      // console.log(data);
      setFilter(data);
    };
    fetchProduct();
  }, []);
  const filterProduct = (cat) => {
  if (cat === "") {
    // userData();
    const getData = userData;
   setFilter(getData)
  }
  else{
    const update = userData.filter((x) => {
      return x.category == cat;
    });

    setFilter(update);
  }
  };

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product"
              element={
                <Product userData={filter} handlechange={filterProduct} />
              }
            />
            <Route
              path="/productdetail/:ID"
              element={<Productdetail userData={userData} />}
            >
              <Route
                path="description"
                element={<Description detail={userData} />}
              />
              <Route path="policy" element={<Policy />} />
              <Route path="review" element={<Review />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>

          <Sec_3 />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
