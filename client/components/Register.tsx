import logo from '../assets/val-pal-logo-draft.png'

function Register() {
  return (
      <>
        <div className="val-container py-40">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-light py-8 shadow sm:rounded-lg sm:px-10">
              <img
                className="mx-auto w-auto"
                src={ logo }
                alt="ValPals"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create Your Account</h2>
          <div className="mt-6 grid grid-cols-1">
            <div>
              <a
                href="/auth/google"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
              <span className="sr-only">Register with Google</span>
              <svg className="h-8 w-8 text-red-500"  
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  stroke-width="2" 
                  stroke="currentColor" 
                  fill="none" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                  >  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                </svg>     
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Register;