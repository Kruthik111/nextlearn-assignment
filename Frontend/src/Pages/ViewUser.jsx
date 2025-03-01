import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchUsers = async () => {
    setloading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/users");
      const data = await response.json();
      console.log(data);
      setUsers(data); // Assuming the response has a "users" key
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <Box>
        {users.map((user, index) => (
          <li key={index}>
            <Paper>
              <Box>
                <h1>Name: {user.name}</h1>
                <h1>Email{user.email}</h1>
                <h1> Phone:{user.phone}</h1>
                <h1> City:{user.city}</h1>
              </Box>
            </Paper>
          </li>
        ))}
      </Box>
    </div>
  );
};

export default ViewUser;
