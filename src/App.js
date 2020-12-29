import { Provider } from "react-redux";
import ChunkHome from "./pages/chunk-home";
import Home from "./pages/home";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Home />
      <ChunkHome />
    </Provider>
  );
}

export default App;
