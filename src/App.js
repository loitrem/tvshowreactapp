import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

function App() {

  const [data, setData] = useState(null);

  const getData = async () => {
      let response = await axios.get(`http://api.tvmaze.com/shows`);
      let info = await response.data;
      console.log(info);
      setData(info);
  }

  useEffect(()=> {
      getData();
  },[])
  return (
    
    <div className="App">
      <Routes>
        <Route path="/"  element={<Main shows={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
