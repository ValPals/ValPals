import {Link} from 'react-router-dom'
 
function NavBar() {

  return (
    <nav >
      <Link to="/">
        <div
          id="logo"
          className="flex flex-row justify-evenly items-center w-5 h-5 rounded-full"
        >
          <img
            id="navBarLogo"
            className="w-5 h-5 "
            src="./client/assets/ValPalsLogo.png"
            alt="ValPals, meet your match"
          />
        </div>
        <div>
          <h2>Components to be added
          </h2>
        </div>
      </Link>

     
</nav>
  );
}


export default NavBar;