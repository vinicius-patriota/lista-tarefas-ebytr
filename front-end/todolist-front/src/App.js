import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import { TaskProvider } from './context/taskContext';

import ItemList from './components/ItemList';
import ItemAdd from './components/ItemAdd';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <span><h2>Ebytr Lista de Tarefas</h2></span>
            <TaskProvider>
              <Route exact={true} path="/">
                  <ItemAdd />
                  <ItemList />
              </Route>
            </TaskProvider>
        </header>
      </div>
    </Router>
  );
}

export default App;
