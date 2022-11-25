import {useState, useEffect} from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const getCoins = async() => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/tickers`)
    ).json();
    
    setCoins(json);
    setLoading(false);
  };

  useEffect(() => {
    getCoins();
  }, []);
    /*
    fetch(`https://api.coinpaprika.com/v1/tickers`).then((rep) => rep.json()).then((json) => {
      console.log(json);
      setCoins(json);
      setLoading(false)
    });
    */ 

  
  return (
    <div>
      <h1>The ! {loading ? <strong>Loading...</strong> : null }</h1>
      <hr/>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((info, index) => <li key={index}>{info.name} ({info.symbol}) : {info.quotes.USD.price.toLocaleString()} USD</li>)}
      </ul>
      <hr/>
    </div>
  );
}

export default App;
