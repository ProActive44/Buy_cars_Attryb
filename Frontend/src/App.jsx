import { useSelector } from "react-redux";
import "./App.css";
import NavBar from "./Components/NavBar";
import AllRoutes from "./Router/AllRoutes";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const isLoading = useSelector((store) => store.isLoading);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="">
        <NavBar />
        {/* {isLoading && <Loading />} */}
        <AllRoutes />
        <Footer/>
      </div>
    </>
  );
}

export default App;
