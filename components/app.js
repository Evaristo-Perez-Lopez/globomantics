import { useCallback, useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

function App() {
  const [houseSelected, setHouseSelected] = useState();
  const setHouseSelectedWrapper = useCallback((house)=>{
    setHouseSelected(house)
  }, [])
  return (
    <>
      <Banner headerText="Propy">Hi I&apos;m Kind a SLOT in Vue...</Banner>
      {houseSelected ? (
        <House house={houseSelected} />
      ) : (
        <HouseList selectHouse={setHouseSelectedWrapper} />
      )}
    </>
  );
}

export default App;
