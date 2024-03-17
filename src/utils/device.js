/* import { getDataFromAPI } from "../api";
const data=await getDataFromAPI();
console.log(data) */

import ac from "../assets/ac.png"
import fan from "../assets/fan.png"
import bulb from "../assets/bulb.png"
import led from "../assets/led.png"
import { Fan,Lightbulb,Siren,AirVent } from 'lucide-react';

const devices = [
    {
      teamid: "8nCa1hq",
      device: "Fan",
      value: 0,
      ic:Fan,
      icon:fan
    },
    {
      teamid: "8nCa1hq",
      device: "Bulb",
      value: 1,
      ic:Lightbulb,
      icon: bulb
    },
    {
      teamid: "8nCa1hq",
      device: "LED",
      value: "#000000",
      ic: Siren,
      icon: led
    },
    {
      teamid: "8nCa1hq",
      device: "AC",
      value:{
        "temp": 24,
        "state": 0
      },
      ic:AirVent,
      icon: ac
    },
  ];

  export default devices;