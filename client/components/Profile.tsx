import { UserData } from '../interfaces';
import Pronoun from './Pronoun';
import Date from './Date';


const data: UserData = {
  displayName: 'Jane Cooper', 
  preferredPronouns: 'she-her', 
  aboutMe: 'I love dogs', 
  formData: 'walk.mov.din.net.des.ex.pic.dog.chi.cof', 
  associateWith: 'male', 
  interestedIn: 'female', 
}

export default function ProfileCard() {
  // turn the string into an array of pronouns
  const pronouns = data.preferredPronouns.split('-');
  const topThree = data.formData.split('.').filter((e,i)=> i < 3);

  return (
    <div className='bg-white flex flex-col rounded-lg shadow'>
      {/* Profile Photo */}
      {data.photo && (
        <img 
          src={data.photo}
          alt='profile photo'
          className='h-65 w-full object-cover rounded-t-lg shadow-md'
        />
      )}
      {/* Information Block Section*/}
      <div className='flex-1 flex flex-col'>
        <div className="flex-1 flex flex-col p-5">

          {/* name / pronoun container so they are side by side */}
          <div className='flex flex-col '>
            <div>
              <h2 className='font-semibold'>{data.displayName}</h2>
            </div>
            <div>
              {pronouns.map((pronoun, i) => <Pronoun key={i} pronoun={pronoun}/>)}
            </div>
          </div>

          {/* Top Three Dates: Date component x 3 */}
          <div className='flex flex-col'>
            <div>
              <h2 className='font-semibold'>Top Three Dates:</h2>
            </div>
            <div>
              {/* Date Component */}
              {topThree.map((date, i) => <Date key={i} date={date}/>)}
            </div>
          </div>

          {/* TODO: Interested in: Gender */} {/* TODO: Associate with: Gender */}

          {/* About Me  - add about me section with line clamp to 6 as needed? */}
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">
              {data.aboutMe}
            </p>
          </section>
          
          {/* TODO: TOGGLE: edit profile button  - should pull up / route to - ProfileForm */}

          {/* TODO: TOGGLE: BLOCK button & MATCH button */}
        </div>
      </div>
    </div>
  )
}