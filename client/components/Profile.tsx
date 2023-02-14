import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { UserData } from '../interfaces';

const data: UserData = {
    displayName: 'Jane Cooper',
    preferredPronouns: 'she-her',
    aboutMe: 'I love dogs',
}

type Props = {
  data: UserData;
}

export default function Profile({data}: Props) {
  return (
    
  )
}