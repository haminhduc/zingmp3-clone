import axios from "../axios";
export const getHome = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/Home",
        method: "get",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
