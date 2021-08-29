
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Booking from "./pages/Booking";
import Space from "./pages/Space";


export const App = () => {

  return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/book-now/locations"
            component={Booking}
          />
          <Route path={`/book-now/search`}
            component={Space}
          />
          <Route path="/" render={() => <Redirect to="/book-now/locations" />}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
