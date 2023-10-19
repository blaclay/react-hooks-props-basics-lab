import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  );
}

// function NavBar() {
//   const links = ["home", "about"];

//   const linkElements = links.map((link) => {
//     return <a href={{hash: link  }}>{link}</a>
//   });

//   return <nav>
//     {linkElements}
//   </nav>;
// }

export default NavBar;
