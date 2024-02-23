import { useState, useEffect } from "react";
import { mockTransactions } from "/Users/juanpablogonzalezmarin/Desktop/Bootcamp/workshop-block27a/sales-dashboard/src/mockData.js";
import PersonIcon from "@mui/icons-material/Person";

export default function TotalClients() {
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let totalClients = 0;
    mockTransactions.forEach((element) => {
      totalClients++;
    });
    setClients(totalClients);
  }, []);

  return (
    <>
      <PersonIcon />
      <h3>Total Clients</h3>
      <p>{clients}</p>
    </>
  );
}
