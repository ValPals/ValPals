import ProfilePage  from '../components/ProfilePage'
import database from '../database.json';

export default function ProfileContainer (){
  console.log(database.data[0])

    return (
      <div className="val-conteainer py-40">
        <ProfilePage data={database.data.at(-1)}/>
      </div>
            
    
    )
}