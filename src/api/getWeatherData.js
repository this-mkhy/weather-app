import axios from "axios";

export const getWeatherData = async (latitude, longitude, city) => {
    try {
      const res = await axios.get("http://api.weatherstack.com/current?access_key=0f7729a97c79061ae4e98e3d886d9246&query=" + city + latitude + "," + longitude);
      
      const data = res.data;
      // console.log(res);
      //console.log(res.data);

      return data;
    } catch (error) {
      console.log("Error: ", error);
    }
  };


