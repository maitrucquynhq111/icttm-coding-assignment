import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";

// Components
import BarChart from "./components/BarChart";
import MapChart from "./components/MapChart";
import TableData from "./components/TableData";
import Search from "./components/Search";

const Container = styled(Box)(({ theme }) => ({
  padding: 16,
  backgroundColor: "#F4F7FE",
}));

function App() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <BarChart />
        </Grid>
        <Grid item xs={6}>
          <MapChart />
        </Grid>
        <Grid item xs={12}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <TableData />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
