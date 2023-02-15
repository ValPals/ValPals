import { UserData } from '../interfaces';
import Pronoun from './Pronoun';

const data: UserData = {
    displayName: 'Jane Cooper',
    preferredPronouns: 'she-her',
    aboutMe: 'I love dogs',
    photo: 'photo',
    formData: 'walk.mov.din.net.des.ex.pic.dog.chi.cof'
}

type Props = {
  data: UserData;
}

export default function ProfileCard({data}: Props) {
  // turn the string into an array of pronouns
  const pronouns = data.preferredPronouns.split('-');

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
        {/* name / pronoun container so they are side by side */}
        <div className='flex flex-col'>
          <div>
            <h2 className='font-semibold'>{data.displayName}</h2>
          </div>
          <div>
            {pronouns.map((pronoun) => <Pronoun pronoun={pronoun}/>)}
          </div>
        </div>
        {/* Top 3 date outings */}
        {/* About Me  - add about me section with truncate as needed?*/}
        {/* edit profile button  - should pull up ProfileForm*/}
      </div>
    </div>
  )
}