import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const getProperties = (region) => {
  return axios
    .get(API_URL + "api/properties/regions/" + region)
    .then((response) => response.data.properties)
};

const getLocations = () => {
  return axios
    .get(API_URL + "api/properties/locations")
    .then((response) => response.data.locations)
};

const getRegions = () => {
  return axios
    .get(API_URL + "api/properties/regions")
    .then((response) => response.data.regions)
};

const getSpace = (id) => {
  return axios
    .get(API_URL + "api/properties//space/" + id)
    .then((response) => response.data.space)
};

const locationServices = { getProperties, getLocations, getRegions, getSpace }

export default locationServices