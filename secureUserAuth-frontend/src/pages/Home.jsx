import Bryt from '../assets/Bryt.jpeg';
import Button from '../components/buttons/Button';
import Logout from '../components/logout';
import { Link } from 'react-router-dom'

export default function Example() {
  return (
    <section className="relative 
      isolate overflow-hidden
      bg-white px-6 py-20 
      sm:py-4 lg:px-8"
    >
      <div className="absolute 
        inset-0 -z-10 
        bg-[radial-gradient(45rem_50rem_at_top,
        var(--color-indigo-100),white)] opacity-20" 
      />
      <div className="absolute inset-y-0 
        right-1/2 -z-10 mr-16 w-[200%] 
        origin-bottom-left skew-x-[-30deg] 
        bg-white shadow-xl ring-1 shadow-indigo-600/10
        ring-indigo-50 sm:mr-28 lg:mr-0 
        xl:mr-16 xl:origin-center" 
      />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       
       <div className='flex justify-end'>
        <Logout />
        
       </div>
        
        
        <figure className="mt-28">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “Task-01. A Secure User authentication.
              This is an implementation of a user authentication system with secire login
              and registration functionality. Users are able to signup for an account, login
              securely and able to access the protected route after login.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={Bryt}
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Bright Darkwa</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                Intern ProdigyInfoTech
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <Link to='profile'>
                <Button
                  type="button"
                  bgColor="bg-blue-800"
                  textColor='text-gray-200'
                  className=' rounded-lg 
                  px-8 py-2 shadow-md 
                  hover:bg-button mt-16 
                  lg:mt-8 font-semibold
                  '
                >
                  Visit Profile
                </Button>
              </Link>
            </div>
            
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
