import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import SliderBrand from "./components/SliderBrands/SliderBrand";
import TopFooter from "./components/Footer/TopFooter/TopFooter";
import Footer from "./components/Footer/Footer";
import BotFooter from "./components/Footer/BotFooter/BotFooter";
import Categories from "./components/Categories/Categories";
import { setCurrentUser } from "./actions/userActions";
import store from "./store";

const token = localStorage.token;

if (token) {
  store.dispatch(setCurrentUser(token));
}

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/my-account" element={<MyAccount />}></Route>
      </Routes>
      <SliderBrand />
      <Categories />
      <TopFooter />
      <Footer />
      <BotFooter />
    </div>
  );
}

export default App;
