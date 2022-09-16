import './App.css';
import { Watchlist } from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from './components/Header';
import { Watched} from "./components/Watched";
import {Add} from "./components/Add";
import './lib/font-awesome/css/all.min.css';

import {GlobalProvider} from "./context/GlobalState"

function App() {
  return (
      <GlobalProvider>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Watchlist/>}/>
            <Route path={"/watched"} element={<Watched/>}/>
              <Route path={"/add"} element={<Add/>}/>
          </Routes>
        </Router>
    </GlobalProvider>
  );
}

export default App;
