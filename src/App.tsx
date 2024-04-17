import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

interface UserData {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}

const App: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      const { name, email } = response.data.results[0];
      const user = { name, email };
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="App">
      {userData && (
        <div>
          <h1>
            {userData.name.title} {userData.name.first} {userData.name.last}
          </h1>
          <p>Email: {userData.email}</p>
        </div>
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default App;
