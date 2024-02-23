import { useState, useEffect } from "react";
import { mockTransactions } from "/Users/juanpablogonzalezmarin/Desktop/Bootcamp/workshop-block27a/sales-dashboard/src/mockData.js";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function SalesObtained() {
  const [sales, setSales] = useState(0);

  const totalSales = mockTransactions.reduce(
    (total, element) => total + +element.cost,
    0
  );

  useEffect(() => {
    setSales(totalSales);
  }, [totalSales]);

  return (
    <>
      <AttachMoneyIcon />
      <h3>Obtained Sales</h3>
      <p>${sales}</p>
    </>
  );
}
