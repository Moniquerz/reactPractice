import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
