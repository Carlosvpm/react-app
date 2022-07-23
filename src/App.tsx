import { Tweet } from "./components/Tweet";

function App() {
  return (
    /* O React não permite que tags de compontentes seguidas umas das outras não sejam encapsuladas com algo (<div></div> ou outra tag HTML) */
    <div>
      <Tweet text="tweet 1"></Tweet>
      <Tweet text="tweet 2"></Tweet>
      <Tweet text="tweet 3 "></Tweet>
    </div>
  );
}

export default App;
