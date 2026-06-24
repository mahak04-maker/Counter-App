import Counter from "./components/counter";
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <h1>Custom Hook Counter App</h1>

      <Counter
        title="Counter One"
        initialValue={0}
        step={1}
      />

      <Counter
        title="Counter Two"
        initialValue={10}
        step={5}
      />

      <Counter
        title="Counter Three"
        initialValue={100}
        step={10}
      />
    </div>
  );
}

export default App;