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
    // console.log( 'NameATtribute',e.target.name);
    // console.log( 'VALUE',e.target.value);
    
     
    setUserObj(  
      {...userObj, [e.target.name] : e.target.value      // re assign the key of obj e.g =>   userEmail    :  moiz@mail.com

      })

      
      
    }
    
     //  <-------- SET DATA IN LOCALSTORAGE FUNCTION  ------->

    const  onSubmit = async (e) => {
     e.preventDefault();   // Page ko Refresh nhi hone da rha

  
     await createUserWithEmailAndPassword(auth, userObj.userEmail, userObj.userPass, userObj.userName)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            // ..
        });
    }  

  return (
    <div className="w-[420px] mx-auto md:mt-7"> 
      <img src="/S1.png" alt="Mainimg" className="rounded-sm" />

      <div className="mt-4.5 bg-white rounded-2xl relative bottom-10 z-50 px-5.5 py-9">

        <h1 className="font-bold text-3xl">SignUp</h1>

         <form onSubmit={onSubmit} className="mt-5 leading-10 rounded-md  py-3">
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