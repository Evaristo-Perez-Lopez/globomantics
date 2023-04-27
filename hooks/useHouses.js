const { useState, useEffect } = require("react");

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(
    () => {
      const getAllHouses = async () => {
        const response = await fetch("/api/houses");
        const houses = await response.json();
        setHouses(houses);
      };
      getAllHouses();
    },
    [] /** para evitar infinite-loop */
  );
  return { houses, setHouses };
};

export default useHouses;
