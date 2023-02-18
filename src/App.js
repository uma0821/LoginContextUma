import React, {useContext} from "react";

import { AuthContext } from './AuthContext.js';
import Login from './Login';
import Home from './Home';

const App = () => {
  const { state } = useContext(AuthContext);

  if (!state.isLoggedIn) 
    return <Login />;
  else
    return <Home />
}

export default App;