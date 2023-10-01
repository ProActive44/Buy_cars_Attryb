import { useSelector } from "react-redux";
import "./App.css";
import NavBar from "./Components/NavBar";
import AllRoutes from "./Router/AllRoutes";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";

function App() {
  const isLoading = useSelector((store) => store.isLoading);

  return (
    <>
      <div className="">
        <NavBar />
        {isLoading && <Loading />}
        <AllRoutes />
        <Footer/>
      </div>
    </>
  );
}

export default App;
