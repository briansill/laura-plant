import Banner from "./components/Banner";
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import { useCallback, useState } from "react";
import navValues from "./navigation/navValues";
import ComponentPicker from "./components/ComponentPicker";
import navigationContext from "./navigation/navigationContext";

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );

  const [nav, setNav] = useState({ current: navValues.home, navigate });

  console.log("starting up App");
  return (
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong loading App.">
        
        <Banner>
          <div>Plant Caring Journal</div>
        </Banner>

        <ComponentPicker currentNavLocation={nav.current} />

      </ErrorBoundary>
    </navigationContext.Provider>
  )
}

export default App
