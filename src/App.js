// import logo from "./logo.svg";
//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import HelloWorld from "./components/dict/HelloWorld";
//import HelloWorldFunction from "./components/dict/functionComponents/HelloWorldFunction";
import Player from "./components/dict/Player";

import Pokemon from "./components/dict/Pokemon";

import Resto from "./components/dict/Resto";

function App() {
  const nameWithProps = "Mon w/props";

  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          <HelloWorld data={nameWithProps} />
        </div>

        <div>
          <Player />
        </div>

        <div>
          <Pokemon />
        </div>

        <div>
          <Resto />
        </div>

        {/* <HelloWorldFunction /> */}
      </header>
    </div>
  );
}

export default App;
