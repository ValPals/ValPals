import ProfileCard from "./Profile";
import database from '../database.json';

export default function Home() {
  return (
    <div
      id="home"
      // className="h-[48rem] w-screen bg-gradient-to-tr from-teal-blue flex flex-row items-center justify-evenly"
      
    >
      {database.data.map(profile => <ProfileCard data={profile}/>)}
    </div>
  );
}
  

  