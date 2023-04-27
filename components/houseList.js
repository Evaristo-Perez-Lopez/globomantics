import HouseRow from "./houseRow";

const houses = [
  {
    address: "1234 Main St",
    price: 100000,
    country: "USA",
    id: 1,
  },
  {
    address: "Manhattan Ave",
    price: 200000,
    country: "France",
    id: 2,
  },
];
function HouseList() {
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
    </>
  );
}

export default HouseList;
