import React from "react";

export function DropdownMenu({ dataset }) {
  console.log(dataset);
  return (
    <ul className="dropdown-menu listNone">
      {dataset.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
}
