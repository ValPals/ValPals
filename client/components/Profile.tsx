import { UserData } from '../interfaces';

const data: UserData = {
    displayName: 'Jane Cooper',
    preferredPronouns: 'she-her',
    aboutMe: 'I love dogs',
    photo: 'string',
}

type Props = {
  data: UserData;
}

export default function ProfileCard({data}: Props) {
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
        {/* Name */}{/* Pronouns */}
        {/* About Me */}
        {/* edit profile button */}
      </div>
    </div>
  )
}