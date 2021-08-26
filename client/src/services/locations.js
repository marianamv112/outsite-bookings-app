import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getProperties = (region) => {
  return axios
    .get(API_URL + "properties/regions/" + region)
    .then((response) => response.data)
};

const getLocations = () => {
  return axios
    .get(API_URL + "properties/locations")
    .then((response) => response.data)
};

const locationServices = { getProperties, getLocations }

export default locationServices