import React, { useEffect } from "react";
import { HeaderBar } from "../../components";
import * as apis from "../../apis";

const Home = () => {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await apis.getHome();
      console.log(response);
    };
    fetchDataHome();
  }, []);
  return (
    <div className="overflow-y-auto ">
      <div className="h-[70px] px-[59px] flex items-center">
        <HeaderBar />
      </div>
    </div>
  );
};

export default Home;
