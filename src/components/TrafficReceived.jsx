import { useState, useEffect } from "react";
import { mockTransactions } from "/Users/juanpablogonzalezmarin/Desktop/Bootcamp/workshop-block27a/sales-dashboard/src/mockData.js";
import TrafficIcon from "@mui/icons-material/Traffic";
export default function TrafficReceived() {
  const [traffic, setTraffic] = useState(0);

  useEffect(() => {
    let totalTraffic = 0;
    mockTransactions.forEach((element) => {
      totalTraffic++;
    });
    setTraffic(totalTraffic);
  }, []);

  return (
    <>
      <TrafficIcon />
      <h3>Total Traffic</h3>
      <p>{traffic}</p>
    </>
  );
}
