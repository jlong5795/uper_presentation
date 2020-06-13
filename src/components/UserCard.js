import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <p>{props.user.login}</p>
      <p>{props.user.location}</p>
    </div>
  );
};

export default UserCard;
