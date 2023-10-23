import { Home, Login, Public } from "./containers/public/";
// import { ToasterContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";

function App() {
  // const { test, homeData } = useSelector((state) => state.app);
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
