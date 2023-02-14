import {Link} from 'react-router-dom'
 
function NavBar() {

  return (
    <nav >
      <Link to="/">
        <div
          id="logo"
          className="flex flex-row justify-evenly items-center w-60 h-12 rounded-full"
        >
          <img
            id="navBarLogo"
            className="w-8 max-h-sm "
            src="./assets/ValPalsLogo.png"
            alt="ValPals, meet your match"
          />
          <h1 id="logoText" className="text- text-3xl">
            ValPals
          </h1>
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