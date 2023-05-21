import { Route, Switch, Redirect} from "react-router-dom";

import Header from "./Components/Header"
import Home from "./Components/Home"
import About from './Components/About'
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => (
  <>
  <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
    <Footer/>
  </>
);

export default App;