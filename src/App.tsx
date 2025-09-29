import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Showing you the alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        color="secondary"
      >
        Show Me the Alert
      </Button>
      <br></br>
      <Button
        onClick={() => {
          console.log("Primary butto clicked");
        }}
      >
        Another Primary Button
      </Button>
    </div>
  );
}

export default App;
