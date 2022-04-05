// import "../model/Engine";

import useStore from "../store/index";
import axios from "axios";

export function getEngineList() {
  axios

    .get("http://101.43.89.12:8888/assets/engines.json")

    .then((res) => {
      useStore().engines = res.data;
      useStore().engine = res.data[0];
    })
    .catch((err) => {
      alert(err.message);
    });
}

export const imgBaseUrl = "http://101.43.89.12:8888/icons/";
