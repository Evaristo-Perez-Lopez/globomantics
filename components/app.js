import React, { useCallback, useState } from "react";
import Banner from "./banner";
import navValues from "@/helpers/navValues";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext(navValues.home);
function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });
  return (
    <navigationContext.Provider value={nav}>
      <Banner headerText="Propy">Hi I&apos;m Kind a SLOT in Vue...</Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
}
export { navigationContext };
export default App;
