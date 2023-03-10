import React, {useContext} from 'react';
import { useSetState } from 'react-use';

import { AuthContext } from './AuthContext.js';

const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState;
  const [state, setState] = useSetState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    console.log(email+" heloo "+password);
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }
    
  return (
    <>
     <div class="card fluid">
        <h4>Databeat.io Login</h4>
      </div>
    <form name="loginForm" onSubmit={onSubmit}>

      <div className="row">

        <div className="col-sm-3 col-md-6">
          <label htmlFor="email">Username</label>
        </div>
        
        <div className="col-sm-9 col-md-6">
          <input 
            type="text" 
            name="email" 
            onChange={e => setState({email: e.target.value})} 
            value={state.email} 
            placeholder="username" 
          />
        </div>

        <div className="col-sm-3 col-md-6">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-sm-9 col-md-6">
            <input 
              type="password" 
              name="password" 
              onChange={e => setState({password: e.target.value})} 
              value={state.password} 
              placeholder="password" 
            />
        </div>

        <div className="col-sm-3 col-md-6">
        </div>
        <div className="col-sm-9 col-md-6">
          <input className="primary" type="submit" value="Login" />
        </div>
        
      </div>

      { isLoginPending && <div>Please wait...</div> }
      { isLoggedIn && <div>Success.</div> }
      { loginError && <div>{loginError.message}</div> }
    </form></>
  )
}


export default Login;