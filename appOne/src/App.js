import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Lease Deposit",
      amount: "7,000",
      date: new Date(2023, 1, 28),
    },
    {
      id: "e2",
      title: "Permits and Licenses",
      amount: "2,000",
      date: new Date(2023, 1, 10),
    },
    {
      id: "e3",
      title: "Equipment",
      amount: "18,000",
      date: new Date(2023, 1, 15),
    },
    {
      id: "e4",
      title: "Furniture",
      amount: "5,500",
      date: new Date(2023, 2, 13),
    },
  ];

  return (
    <div>
      <h1>Business Expense Tracker</h1>
        <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
