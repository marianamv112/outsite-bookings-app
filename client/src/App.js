import { useEffect } from "react"
import locationServices from "./services/locations"
import './App.css';

export const App = () => {

  useEffect(() => {
    locationServices.getProperties("Europe").then(res => console.log(res))
    locationServices.getLocations().then(res => console.log(res))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
