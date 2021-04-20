import Header from './components/Header'
import TaskForm from './components/TaskForm'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="main">
          <TaskForm />
        </div>  
      </div>
    </div>
  );
}

export default App;
