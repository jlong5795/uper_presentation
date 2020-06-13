import React, { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [followers, setFollowers] = useState();

  useEffect(() => {
    // make an API call to get my data
    axios
      .get("https://api.github.com/users/jlong5795")
      .then((response) => {
        console.log(response.data);
        // save that data to state
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  useEffect(() => {
    // make an API call for my followers data
    if (user) {
      axios
        .get(user.followers_url)
        .then((response) => {
          console.log(response.data);
          setFollowers(response.data);
          // save that data to state
        })
        .catch((error) => {
          console.log(error.data);
        });
    }
  }, [user]);

  // render my data and followers data
  // pass appropriate data to the UserCard

  return (
    <div className='App'>
      <UserCard user={user} />
    </div>
  );
}

export default App;
