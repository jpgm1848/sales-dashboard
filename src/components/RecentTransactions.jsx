import { useState, useEffect } from "react";
import { mockTransactions } from "/Users/juanpablogonzalezmarin/Desktop/Bootcamp/workshop-block27a/sales-dashboard/src/mockData.js";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(txId, user, date, cost) {
  return { txId, user, date, cost };
}

export default function RecentTransactions() {
  const [transaction, setTransaction] = useState(0);
  const rows = mockTransactions.map((transaction) =>
    createData(
      transaction.txId,
      transaction.user,
      transaction.date,
      transaction.cost
    )
  );
  console.log(rows);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.txId}</TableCell>
                <TableCell align="right">{row.user}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// FIX TRANSACTIONS BY DATE
