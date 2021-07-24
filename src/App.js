import Navbar from "./components/Navbar/Navbar";
import AddStudent from "./components/AddStudent/AddStudent";

import { BrowserRouter, Route } from "react-router-dom";
import ViewStudents from "./components/ViewStudents/ViewStudents";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path="/">
            <AddStudent />
          </Route>

          <Route path="/view-students">
            <ViewStudents />
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
