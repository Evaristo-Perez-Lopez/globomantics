import currencyFormatter from "@/helpers/currencyFormatter";
import React, { useContext } from "react";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

function HouseRow({ house }) {
  const { navigate } = useContext(navigationContext);
  return (
    <tr onClick={() => navigate(navValues.house, house)}>
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
