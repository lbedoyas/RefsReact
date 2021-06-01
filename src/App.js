import logo from './logo.svg';
import './App.css';
import { RefsBasic } from './components/RefsBasic';
import { LibreriasExternas } from './components/LibreriasExternas';
import { PropEspecial } from './components/propEspecial';

function App() {
  return (
    <div className="App">
	<h1>Ref React</h1>
     <RefsBasic />
     <LibreriasExternas />
     <PropEspecial />
    </div>
  );
}

export default App;
