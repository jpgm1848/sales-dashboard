import { useState, useEffect } from "react";
import { mockTransactions } from "/Users/juanpablogonzalezmarin/Desktop/Bootcamp/workshop-block27a/sales-dashboard/src/mockData.js";

export default function RevenueGenerated() {
  const [revenue, setRevenue] = useState(0);

  const totalRevenue = mockTransactions.reduce(
    (total, element) => total + +element.cost,
    0
  );

  useEffect(() => {
    setRevenue(totalRevenue);
  }, [totalRevenue]);

  return (
    <>
      <h3>Revenue Generated</h3>
      <p>${revenue}</p>
    </>
  );
}
