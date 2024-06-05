import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container"></div>
      <Balance />
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </GlobalProvider>
  );
}

export default App;
