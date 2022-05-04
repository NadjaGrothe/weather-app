import React, { useState } from "react";
import "./App.css";
import { LocationSearch } from "./components/LocationSearch";

function App() {
   const [locations, setLocations] = useState<string[]>([]);

   const addLocation = (location: string) =>
      setLocations([location, ...locations]);

   return (
      <div className="container">
         <h1>Weather App</h1>

         <LocationSearch onSearch={addLocation} />

         <div>
            <h2>Locations</h2>
            <table className="table table-hover">
               <thead>
                  <tr>
                     <th>Name</th>
                  </tr>
               </thead>
               <tbody>
                  {locations.map((location, index) => (
                     <tr key={index}>
                        <td>{location}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default App;
