import {useState, useEffect} from "react";

function HelloComponent() {

  function fnHelloStart() {
    console.log("Hello Start!!!");
    return fnHelloEnd;
  }

  function fnHelloEnd() {
    console.log("Hello End!!!");
  }

  useEffect(fnHelloStart, []);

  return <h1>Hellow</h1>;
}

function App() {

  const [showing, setShowing] = useState(false);
  const onShowing = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log("rendering~");
  },[]);

  return (
    <div>
      {showing ? <HelloComponent /> : null}
      <button onClick={onShowing}>{showing ? "Hide": "Show"}</button>
    </div>
  );
}

export default App;
