import './App.css';
import Balance from './Balance';
import Expense from './Expense';
import Header from './Header';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  return (
    <div>
      <Balance />
      <Header />
      <TransactionForm />
      <Expense />
      <TransactionList />
    </div>
  );
}

export default App;
