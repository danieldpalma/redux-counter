import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Contador from "./components/Contador";
import { createStore, combineReducers } from "redux";
import ContadorReducer from "./reducers/ContadorReducer";
/* Provider serve para deixar o store acessível a qualquer componente */
import { Provider } from "react-redux";

function App() {
  const allReducers = combineReducers({ counter: ContadorReducer });
  const store = createStore(allReducers);

  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
  );
}

export default App;
