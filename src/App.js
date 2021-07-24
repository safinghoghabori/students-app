import Navbar from "./components/Navbar/Navbar";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Route path="/">
          <AddStudent />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
