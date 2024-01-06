import React, { useEffect, useState } from "react";

const ServerTest = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3600/api/members")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the fetched data in the console
        setMembers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {members.map((member, id) => {
        return <div key={id}>Member ID: {member.MemberID}</div>;
      })}
    </>
  );
};

export default ServerTest;
