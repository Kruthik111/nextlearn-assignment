import { useState } from "react";

import { Route, Routes } from "react-router";
import RegisterUser from "./Pages/RegisterUser";
import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/system";
import { blue, purple } from "@mui/material/colors";
import ViewUser from "./Pages/ViewUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar
        sx={{
          padding: "15px 0",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography>User</Typography>
            <Stack direction={"row"} gap={5}>
              <Typography sx={{ textAlign: "center" }}>View users</Typography>
              <Typography sx={{ textAlign: "center" }}>Contact</Typography>
            </Stack>
            <Button variant="contained" color="secondary" disableRipple>
              Register
            </Button>
          </Stack>
        </Container>
      </AppBar>
      <Box
        sx={{
          marginTop: 10,
        }}
      >
        <Routes>
          <Route path="/" element={<RegisterUser />} />
          <Route path="/users" element={<ViewUser />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
