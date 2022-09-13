import React from 'react';
import {IButton} from "./NavButton.props";

function NavButton({title, isActive, onClick}: IButton):JSX.Element  {
  return (
    <button
      onClick={onClick}
      className={`
    ${isActive && "bg-[#036756]"} 
    hover:bg-[#036756] text-white py-2 px-4 rounded font-bold`}
    >
      {title}
    </button>
  );
}

export default NavButton;
