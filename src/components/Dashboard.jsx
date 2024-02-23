import TotalClients from "./NewClients";
import SalesObtained from "./SalesObtained";
import TrafficReceived from "./TrafficReceived";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import RevenueGenerated from "./RevenueGenerated";
import RecentTransactions from "./RecentTransactions";
import Sidebar from "./Sidebar.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h1>Dashboard</h1>
          </Grid>
          <Grid item xs={9}>
            {" "}
          </Grid>

          <Grid item xs={3}>
            {" "}
            <Sidebar />{" "}
          </Grid>
          <Grid item xs={9}>
            {" "}
          </Grid>

          <Grid item xs={3}>
            {" "}
            <SalesObtained />{" "}
          </Grid>
          <Grid item xs={3}>
            {" "}
            <TotalClients />{" "}
          </Grid>
          <Grid item xs={3}>
            {" "}
            <TrafficReceived />{" "}
          </Grid>
          <Grid item xs={3}>
            {" "}
          </Grid>
          <Grid item xs={3}>
            {" "}
            <RevenueGenerated />{" "}
          </Grid>
          <Grid item xs={8}>
            {" "}
            <RecentTransactions />{" "}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
