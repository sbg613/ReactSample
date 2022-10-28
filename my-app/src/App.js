import {useState, useEffect} from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    console.log("==Load==");
    
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_ration=8.5`).then((rep) => rep.json()).then((json) => {
     // console.log(json);
      setCoins(json);
      setLoading(false)
    });

  },[]);
  
  return (
    <div>
      <h1>The ! {loading ? <strong>Loading...</strong> : null }</h1>
      <hr/>
      {loading ? <strong>Loading...</strong> : null}
      <hr/>
    </div>
  );
}

export default App;
