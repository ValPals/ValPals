function Home() {
    return (
      <div
        id="home"
        className="h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-row items-center justify-evenly"
      >

        <h1
          id="eleh1"
          className="text-6xl text-error-red leading-relaxed tracking-wide m-0 p-0"
        
        >
         ValPals
        <br />
        
         Meet Your Match
        <br />
        
        </h1>
        
        <img
          id="homeLogo"
          className="w-2/5 max-w-lg"
          src="/ValPalsLogo.png"
          alt="ValPals, meet your match"
        />
{/* 
        'replace' h1 and img tags with components to be rendered */}
      </div>
    );
  }
  
  export default Home;
  