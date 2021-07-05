import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";
import NewRoom from "./pages/NewRoom";

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' exact component={NewRoom} />
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
