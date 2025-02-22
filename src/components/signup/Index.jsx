import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../services/firebase'

function SignUp() {
  const navigate = useNavigate();

   const [userObj, setUserObj] = useState({
    userName    : '',
    userEmail   : '',
    userPass    : '',
   })

  //  <-------- USEROBJECT STATE CHANGED  BY INPUT VALUES ------->
  
   const userValueChanged = (e) => {
    setUserObj(  
      {...userObj, [e.target.name] : e.target.value      // re assign the key of obj e.g =>   userEmail    :  moiz@mail.com

      })
    }
    
  //  <-------- HANDLE SIGNUP FUNCTION PERFORM AUTHNTICATION TASK WITH FIREBSE  ------->

   const  handleSignUp = async (e) => {
     e.preventDefault();   // Page ko Refresh nhi hone da rha

       try{                                   /// SET IN FIREBSE USER EMAIL AND PASSWORD
          let userData =  await createUserWithEmailAndPassword(auth, userObj.userEmail, userObj.userPass, userObj.userName)
          console.log(userData);
          alert('SIGN UP SUCESSFULL NOW LOGIN ✔')
          navigate('/login')
          
        }
        catch(error)  {
            // console.error(error.code, error.msg);
            alert(`${error.code} ❌`)
        }
   }  

  return (
    <div className="w-[420px] mx-auto md:mt-7"> 
      <img src="/S1.png" alt="Mainimg" className="rounded-sm" />

      <div className="mt-4.5 bg-white rounded-2xl relative bottom-10 z-50 px-5.5 py-9">

        <h1 className="font-bold text-3xl">SignUp</h1>

         <form onSubmit={handleSignUp} className="mt-5 leading-10 rounded-md  py-3">
          <div className="border-1 rounded-sm px-3 py-2">
         <input
           type="text"
           placeholder="Enter a UserName"
           name="userName"
           required
           onChange={userValueChanged}
           className="w-full outline-0 border-b-1 border-b-gray-500 pl-2 mt-5" 
           />
         <br />
         <input
           type="email"
           placeholder="Enter a email"
           name="userEmail"
           required
           onChange={userValueChanged}
           className="w-full outline-0 border-b-1 pl-2 mt-5  border-b-gray-500" 
           />
         <br />
         <input
           type="password"
           placeholder="Enter a password"
           name="userPass"
           required
           onChange={userValueChanged}
           className="w-full outline-0   pl-2 mt-5" 
           />
         <br />
        </div>  

         <button 
         type='submit'
         className="w-full bg-black text-white font-bold mt-10 rounded-sm text-lg h-13"
         >
          Signup
          </button>
         </form>
      </div>
    </div>
  )
}

export default SignUp