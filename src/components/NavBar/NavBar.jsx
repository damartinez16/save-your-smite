import { Link } from 'react-router-dom';
import './NavBar.css'
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <nav className="nav">
      <Link className="logonav" to="/"> <img src="https://i.imgur.com/5W5UW5b.png" alt="" height="50px"/></Link>
      <Link to="/builds">ALL BUILDS</Link>
      &nbsp;&nbsp; <img className="bolt" src="https://i.imgur.com/BXRwXog.png" alt="" height="30px"/> &nbsp;&nbsp;
      <Link to="/build/new">NEW BUILD</Link>
      &nbsp; &nbsp; <img className="bolt" src="https://i.imgur.com/BXRwXog.png" alt="" height="30px"/> &nbsp;&nbsp;
      <span className="welcome">WELCOME, {user.name}</span>
      &nbsp; &nbsp; <img src="https://i.imgur.com/BXRwXog.png" alt="" height="30px"/> &nbsp;&nbsp;
      <Link className="logout" to="" onClick={handleLogOut}>LOG OUT</Link>
    </nav>
    <br/>
    <hr/>
    </>
  );
}