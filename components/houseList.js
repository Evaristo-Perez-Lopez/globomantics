import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
function HouseList({ selectHouse }) {
  const { houses, setHouses } = useHouses();
  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: "Colorado Springs",
        price: 9000,
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
            <HouseRow key={house.id} house={house} selectHouse={selectHouse} />
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
