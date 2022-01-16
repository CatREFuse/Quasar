import "../model/Engine";
import useStore from "../store/index";
import axios from "axios";

export function getEngineList() {
  axios
    .get("https://api.catrefuse.com/assets/engines.json")
    .then((res) => {
      useStore().engines = res.data;
      useStore().engine = res.data[0];
    })
    .catch((err) => {
      console.error(err.message);
    });
}
