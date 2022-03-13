import './App.css';
import { Route, Switch } from 'react-router-dom';
import Form from './Components/Pages/Form'
import Video from './Components/Pages/Video'
import Delegacies from './Components/Pages/Delegacies'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Form}/>
        <Route exact path="/delegacies" component={Delegacies}/>
        <Route exact path="/video" component={Video}/>
      </header>
    </div>
  );
}

export default App;