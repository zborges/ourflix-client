import React, { useEffect, useState } from "react";

function Home() {
  const [data, SetData] = useState(null);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => SetData(data.message));
  }, []);
  
  return (
    <div className="App">
      <header className="Home-header">
        <p>{!data ? "Loading..." : data}</p>{" "}
      </header>
    </div>
  );
}

export default Home;
