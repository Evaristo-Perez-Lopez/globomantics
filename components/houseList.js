import { useEffect, useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [

];
function HouseList() {
  const [houses, setHouses] = useState(houseArray);
  useEffect(() => {
    const getAllHouses = async () => {
      const response = await fetch("/api/houses");
      const houses = await response.json();
      setHouses(houses);
    };
    getAllHouses();
  }, [] /** para evitar infinite-loop */ );
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "Colorado Springs",
        price: 15000,
        country: "USA",
      },
    ]);
  };
  return (
    <>
      {/* create a table with three rows with bootstrap5 */}
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Address</th>
            <th scope="col">Price</th>
            <th scope="col">Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} house={house} />
          ))}
        </tbody>
      </table>
      <button onClick={addHouse} className="btn btn-primary">
        Add
      </button>
    </>
  );
}

export default HouseList;
