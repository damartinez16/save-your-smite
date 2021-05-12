import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import BuildsIndexPage from '../BuildsIndexPage/BuildsIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import NewBuildPage from '../NewBuildPage/NewBuildPage';
import LandingPage from '../LandingPage/LandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/build/new">
              <NewBuildPage user={user} setUser={setUser}/>
            </Route>
            <Route path="/builds">
              <BuildsIndexPage user={user} setUser={setUser}/>
            </Route>
            <Redirect to="/home" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
