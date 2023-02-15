import { FormEventHandler, useState, useCallback, ChangeEventHandler } from 'react';
import NameInput from "./NameInput"
import PronounInput from "./PronounInput"
import AboutInput from "./AboutInput"
import GenderInput from "./GenderInput"
import Button from "./Button"


const initialState = {
  displayName: '', 
  preferredPronouns: '', 
  aboutMe: '', 
  formData: '', 
  associateWith: '', 
  interestedIn: '', 
}

type ProfileFormProps = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  onSubmit: FormEventHandler<HTMLFormElement>,
  onSelect: ChangeEventHandler<HTMLSelectElement>,
}

// add components as children
export default function ProfileForm({ onChange, onSubmit }: ProfileFormProps) {
  const [formState, setFormState] = useState({...initialState});

  const handleSubmit = useCallback(
    async(e: { preventDefault: () => void; }) => {
      e.preventDefault();
        //await updateUser(formState)
    },
    [
      formState.displayName,
      formState.preferredPronouns, 
      formState.aboutMe, 
      formState.formData, 
      formState.associateWith, 
      formState.interestedIn    
    ]

  )


  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        {/* NameInput - Text Input*/}
        <NameInput 
          value={formState.displayName}
          onChange={(e) => setFormState((s) => ({...s, displayName: e.target.value}))}
          />
          
        {/* Pronouns Input */}
        <PronounInput 
          value={formState.preferredPronouns}
          onSelect={(e: { target: { value: string; }; }) => setFormState((s) => ({...s, preferredPronouns: e.target.value }))}
          />
          
        {/* About Me Input */}
        <AboutInput 
          value={formState.aboutMe}
          onChange={(e) => setFormState((s) => ({...s, aboutMe: e.target.value}))}
          />
          
        {/* Self Gender Identity (he | she | non-binary | other ) */}
        <GenderInput 
          value={formState.associateWith}
          onSelect={(e: { target: { value: string; }; }) => setFormState((s) => ({...s, associateWith: e.target.value }))}
          choice={'self'}/>
        
        {/* Preferred Gender Identidy (he | she | non-binary | other ) */}
        <GenderInput 
          value={formState.interestedIn}
          onSelect={(e: { target: { value: string; }})=> setFormState((s) => ({ ...s, interestedIn: e.target.value }))}
          choice={'preferred'}/>
        {/* Preferred First Date Form TODO */}

        <Button intent="primary" size="medium">Submit Form</Button>
        {/*  Save Button - post request to UpdateUser Route*/}
      </div>
    </form>
  )
}