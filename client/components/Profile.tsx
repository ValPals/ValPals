import { UserData } from '../interfaces';
import Pronoun from './Pronoun';
import Date from './Date';
import Gender from './Gender';

type Props = {
  data: UserData,
  self?: boolean,
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
        {/* Information Block Section*/}
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
            <div className='mt-4 flex justify-evenly'>

              <button className='text-red-500 bg-white rounded-full shadow hover:bg-red-500 hover:text-white hover:scale-125'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button className='text-emerald-500 bg-white shadow hover:bg-emerald-500 hover:text-white rounded-full hover:scale-125'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}