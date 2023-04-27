import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
  const [houses, setHouses] = useState([]);
  const { get, loadingState } = useGetRequest("/api/houses");

  useEffect(() => {
    const getHouses = async () => {
      const houses = await get();
      setHouses(houses);
    };
    getHouses();
  }, [get]);
  return { houses, setHouses, loadingState };
};

export default useHouses;
