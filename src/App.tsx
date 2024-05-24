import Box from "@mui/material/Box";

import { MdExplore } from "react-icons/md";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/NavBar/ResponsiveAppBar";

function App() {
  return (
    <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>
      <header>
        <img src="./img/london.jpeg" alt="Imagem de Londres" />
        <nav>
          <ResponsiveAppBar />
        </nav>
        <div className="header">
          <div className="header-texto">
            <h1>Discover the world with Travelfy!</h1>
            <p>
              For a trip to London to be perfect, you need to plan it carefully.
              A good way to start is to read some interesting details about the
              city's history, consult answers to frequently asked questions,
              learn about the main tourist attractions and discover its museums
              and galleries.
            </p>
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{ bgcolor: "rgb(255, 122, 5)" }}>
                <MdExplore style={{ marginRight: 9 }} />
                Explorar Destinos
              </Button>
            </Stack>
          </div>
        </div>
      </header>
    </Box>
  );
}

export default App;
