import { UserData } from '../interfaces';
import Pronoun from './Pronoun';
import Date from './Date';
import Gender from './Gender';


type Props = {
  data: UserData,
}

export default function ProfileCard({data}: Props) {
  // turn the string into an array of pronouns
  const pronouns = data.preferredPronouns.split('-');
  const topThree = data.formData.split('.').filter((e,i)=> i < 3);
  console.log(data.photo);

  return (
    <div className="row py-40">
    <div className='mx-auto bg-light flex flex-col rounded-lg shadow w-96'>
      {/* Profile Photo */}
      <div className="image-container overflow-hidden">
        {data.photo && (
          <img 
            src={`https://source.unsplash.com/${data.photo}`}
            alt='profile photo'
            className='val-img h-65 w-full object-cover rounded-t-lg shadow-md hover:scale-110 transition-all duration-500'
          />
        )}
      </div>
      {/* TODO: Finish Styling & spacing - Information Block Section*/}
      <div className='flex-1 flex flex-col'>
        <div className="flex-1 flex flex-col p-5">

          {/* name / pronoun container so they are side by side */}
          <div className='flex flex-col '>
            <div className="py-1">
              <h2 className='font-semibold'>{data.displayName}</h2>
            </div>
            <div className="py-1">
              {pronouns.map((pronoun, i) => <Pronoun key={i} pronoun={pronoun}/>)}
            </div>
          </div>

          {/* Top Three Dates: Date component x 3 */}
          <div className='flex flex-col'>
            <div className="py-1">
              <h2 className='font-semibold'>Top Three Dates:</h2>
            </div>
            <div className="py-1">
              {/* Date Component */}
              {topThree.map((date, i) => <Date key={i} date={date}/>)}
            </div>
          </div>

          {/* Associate with: Gender */}
          <div className="py-1">
            <h2 className='py-1 font-semibold'>Associate With:</h2>
            <Gender key={ data.associateWith } gender={ data.associateWith } color='bg-red-700' />
          </div>

          {/* Interested in: Gender */} 
          <div className="py-1">
            <h2 className='py-1 font-semibold'>Interested In:</h2>
            <Gender key={ data.interestedIn } gender={ data.interestedIn } color='bg-zinc-700' />
          </div>

          {/* About Me  - add about me section with line clamp to 6 as needed? */}
          <div className="mt-2 flex-1">
            <h2 className='py-1 font-semibold'>About Me: </h2>
            <p className="text-zinc-700 font-semibold">{data.aboutMe}</p>
  
          </div>
          
          {/* TODO: TOGGLE: edit profile button  - should pull up / route to - ProfileForm */}

          {/* TODO: TOGGLE: BLOCK button & MATCH button */}
        </div>
      </div>
    </div>
    </div>
  )
}