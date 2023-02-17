import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="text-blue-600">
       hola
      </div>
    </Provider>
    
  );
}

export default App;
