import { Button, Paper, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: 0,
    city: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result); // Handle response
      alert("Form submitted successfully!");
      navigate("/users");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Paper>
      <Box>
        <h1>Create user </h1>
        <Stack
          sx={{
            maxWidth: 300,
            mb: 10,
          }}
          gap={2}
        >
          <form method="POST">
            <TextField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <TextField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <TextField
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
            <TextField
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              maxLength={10}
              min={11111111}
            />
            <Button onClick={handleSubmit} variant="contained">
              Add User
            </Button>
          </form>
        </Stack>
      </Box>
    </Paper>
  );
};

export default RegisterUser;
