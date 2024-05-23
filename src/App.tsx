import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar/ResponsiveAppBar";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "#f7f7f7", height: "100vh" }}>
        <nav>
          <ResponsiveAppBar />
        </nav>
      </Box>
    </Container>
  );
}

export default App;
