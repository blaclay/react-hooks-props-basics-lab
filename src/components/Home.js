import React from "react";

function Home({ name, city, color }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

// function Home({ color, username, city }) {
//   return (
//     <div id="home">
//       <h1 style={{ color: color }}>
//         {username} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }

export default Home;
