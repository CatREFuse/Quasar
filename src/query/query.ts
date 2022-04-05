// import "../model/Engine";

import useStore from "../store/index";
import axios from "axios";

export function getEngineList() {
  axios

    .get(
      "https://catrefuse-server-1302682122.cos.ap-nanjing.myqcloud.com/engines.json"
    )

    .then((res) => {
      useStore().engines = res.data;
      useStore().engine = res.data[0];
    })
    .catch((err) => {
      alert(err.message);
    });
}

export const imgBaseUrl =
  "https://catrefuse-server-1302682122.cos.ap-nanjing.myqcloud.com/icons/";
