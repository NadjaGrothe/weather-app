import React, { useState } from "react";
import "./App.css";
import { LocationSearch } from "./LocationSearch";
import { LocationTable } from "./LocationTable";

function App() {
   const [locations, setLocations] = useState<string[]>([]);

   const [error, setError] = useState("");
   const [warning, setWarning] = useState("");

   const addLocation = (location: string) =>
      setLocations([location, ...locations]);

   return (
      <div className="container">
         <h1>Weather App</h1>

         <LocationSearch onSearch={addLocation} />
         {error ? <div className={`alert alert-danger`}>{error}</div> : null}
         {warning ? (
            <div className={`alert alert-warning`}>{warning}</div>
         ) : null}
         
         <LocationTable locations={locations} />
      </div>
   );
}

export default App;
