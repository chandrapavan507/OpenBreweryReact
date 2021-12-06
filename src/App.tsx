import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/header";
import { CITIES } from "./util/constants";

export const CityContext = createContext({
  city: CITIES[0],
  setCity: (city: string) => {},
});

function App() {
  const [city, setCity] = useState(CITIES[0]);

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <div className="App">
        <Header />

        <div className="">
          <Outlet />
        </div>
      </div>
    </CityContext.Provider>
  );
}

export default App;
