import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import ModPage from "./ModPage"
function Hello() {
  let [data, setData] = useState([]);
  let onLoad = async() => {
    let dt = await fetch('https://api.modrinth.com/v2/search');
    let json = await dt.json();
    console.log(json)
    setData(json['hits']);
    console.log(Object.values(json['hits']));
    console.log(json["hits"])
    
  }
   useEffect(() => {
     onLoad();
     
   }, []);
  return (
    <div className='main'>
      <h1>Modrinth</h1>
      <div className='mod-container'>
        {data.map((dat) => 
      <ModPage data={dat} key={dat["project_id"]}/>
      )}
      </div>
      
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
