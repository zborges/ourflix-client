import React, { useEffect, useState } from "react";

function Home() {
  const [data, SetData] = useState(null);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => SetData(data.message));
  }, []);

  return (
    <div className="flex justify-center">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        {!data ? "Loading..." : data}
      </p>{" "}
    </div>
  );
}

export default Home;
