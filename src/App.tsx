import "./App.css";
import {
  Link,
  Switch,
  Route,
  Prompt,
  BrowserRouter as Router,
} from "react-router-dom";

const PromptPage = () => {
  return (
    <div>
      <Prompt message="prompt sample" />
      <div>prompt</div>
    </div>
  );
};

const Home = () => {
  return <div>home</div>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prompt">Prompt page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/prompt">
            <PromptPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
