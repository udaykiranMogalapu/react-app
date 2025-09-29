import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button>Show Me the Alert</Button>
      <br></br>
      <Button>Another Primary Button</Button>
    </div>
  );
}

export default App;
