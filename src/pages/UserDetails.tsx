import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("*");
  console.log(params);
  console.log(searchParams.get("filter"));

  return (
    <div>
      <h1>Details about the user</h1>
      <h2>{userId}</h2>
      <button onClick={() => setSearchParams({ filter: "active" })}>Add</button>
      <button onClick={() => setSearchParams({})}>Reset</button>
    </div>
  );
};

export default UserDetails;
