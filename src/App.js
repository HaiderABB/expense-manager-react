import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList.jsx'
import AddTransaction from './components/AddTransaction.jsx'
function App() {
  return (
    <div> 
    <Header></Header>
    <div className="container"></div>
    <Balance/>
    <div class="inc-exp-container">
      <IncomeExpense></IncomeExpense>
      </div>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>

  );
}

export default App;
