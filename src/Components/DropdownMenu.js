import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { bucket } from "./Store/CreateStore";

export function DropdownMenu({ dataset, destination }) {
  const { hightlightButtons } = useContext(bucket);
  return (
    <>
      {dataset ? (
        <ul className="dropdown-menu listNone">
          {dataset.map((element, index) => {
            return (
              <NavLink
                // style={hightlightButtons}
                to={destination}
                state={{ brand: element }}
                key={index}
              >
                <li key={index}>{element}</li>
              </NavLink>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
