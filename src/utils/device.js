import { getDataFromAPI } from "../api";
const data=await getDataFromAPI();

const devices = [
    {
      teamid: "8nCa1hq",
      device: "Fan",
      value: 0
    },
    {
      teamid: "8nCa1hq",
      device: "Bulb",
      value: 1
    },
    {
      teamid: "8nCa1hq",
      device: "LED",
      value: "#000000"
    },
    {
      teamid: "8nCa1hq",
      device: "AC",
      value:{
        "temp": 24,
        "state": 0
      }
    },
  ];

  export default devices;