import React from "react";

export function DropdownMenu({ dataset }) {
  return (<>
   {dataset ? (<ul className="dropdown-menu listNone">
      {dataset.map((element, index) => {
        return <li key={index}>{element}</li>;
      })}
    </ul> ): null }
    </>
  );
}
