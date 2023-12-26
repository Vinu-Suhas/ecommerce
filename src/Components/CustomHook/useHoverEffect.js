import { useState } from "react";

export const useHoverEffect = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return { isDropdownVisible, handleMouseEnter, handleMouseLeave };
};
