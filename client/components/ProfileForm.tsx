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

      location.href='http://localhost:8888/home'
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
    <div className="val-container py-40">
      <div className="mx-auto bg-light px-10 py-10 w-96 shadow-xl rounded-lg sm:rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-8">
          <h2 className="text-center font-bold text-2xl text-zinc-800">Tell Us About Yourself</h2>
          <div className="space-y-8 sm:space-y-5">
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
            
            {/* Preferred Gender Identity (he | she | non-binary | other ) */}
            <GenderInput 
              value={formState.interestedIn}
              onSelect={(e: { target: { value: string; }})=> setFormState((s) => ({ ...s, interestedIn: e.target.value }))}
              choice={'preferred'}/>
            {/* TODO: Preferred First Date Form */}

            <Button className="block-btn mt-5" intent="primary" size="medium" onClick={
              () => {location.href = 'localhost:8888/home'}
            }>Submit Form</Button>
            {/*  TODO: Save Button - post request to UpdateUser Route*/}
          </div>
        </form>
      </div>
    </div>
  )
}