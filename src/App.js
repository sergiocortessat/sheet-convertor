import logo from './logo.svg';
import './App.css';
import {flatten} from './flatten'
import Renderer from './rendererFunc'

function App() {
  const json = {
      Email: 'peterduey@gmail.com',
      Customer_Name: {
        display_value: 'Peter Duey',
        prefix: '',
        last_name: 'Duey',
        suffix: '',
        first_name: 'Peter',
      },
      Phone_Number: '18686563590',
      ID: '4229008000000058297',
      line: [{"name": "cortes"}]
  }

  function handleButton() {
    console.log(flatten(json));
  }
  return (
    <div className="App">
    <button type="button" onClick={handleButton} >Get Spreadsheet</button>
    <Renderer json={json} />
    </div>
  );
}

export default App;
