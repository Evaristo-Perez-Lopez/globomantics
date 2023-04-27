import currencyFormatter from "@/helpers/currencyFormatter";
import React from "react";

function HouseRow({ house, selectHouse }) {
  return (
    <tr onClick={() => selectHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      {house.price && (
        <td className={`${house.price >= 100000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(house.price)}
        </td>
      )}
    </tr>
  );
}

export default HouseRow;
