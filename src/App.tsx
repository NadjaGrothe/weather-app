import React, { useState } from "react";
import "./App.css";
import { LocationSearch } from "./components/LocationSearch";
import { LocationTable } from "./components/LocationTable";

function App() {
   const [locations, setLocations] = useState<string[]>([]);

   const addLocation = (location: string) =>
      setLocations([location, ...locations]);

   return (
      <div className="container">
         <h1>Weather App</h1>

         <LocationSearch onSearch={addLocation} />
         <LocationTable locations={locations} />
      </div>
   );
}

export default App;
