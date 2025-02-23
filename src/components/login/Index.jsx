import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {auth} from '../../services/firebase'
import { signInWithEmailAndPassword } from "firebase/auth"

function Login() {
  const navigate = useNavigate()

  const [userObj , setUserOj] = useState({
    userEmail : '',
    userPass : '',
  })

  //  <-------- USEROBJECT STATE CHANGED  BY INPUT VALUES ------->
  const  userValueChanged = (e) => {
    // console.log(e.target.name, e.target.value);
    setUserOj({...userObj, [e.target.name] : e.target.value})
  }

  //  <-------- HANDLE SIGNUP FUNCTION PERFORM AUTHNTICATION TASK WITH FIREBSE  ------->

  const handleLogIn =  async (e) => {
       
    e.preventDefault();   // Page ko Refresh nhi hone da rha
    
    try{                       /// CHECK EMAIL AND PASSWORD MATCH  FIREBSE USER EMAIL AND PASSWORD
      let data = await signInWithEmailAndPassword(auth, userObj.userEmail, userObj.userPass)
      console.log(data);
      alert('LOGIN SUCESSFULLY ✔') 
      navigate('/home')
    }
    catch(error) {
      // console.error(error.message, error.code);
       alert(`${error.code} ❌`)
    }
  }



  return (
    <div className="w-full md:w-[420px] mx-auto md:mt-7"> 
    <img src="/L1.png" alt="Mainimg" className="rounded-sm" />

    <div className="mt-4.5 bg-white rounded-2xl relative bottom-10 z-50 md:px-5.5  py-9 md:min-h-[62vh]">

      <h1 className="font-bold text-3xl ml-3">Login</h1>

       <form onSubmit={handleLogIn} className="mt-9 leading-10  px-2 py-3">
        <div className="border-1 rounded-sm px-3 py-4">
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
       <button className="w-full bg-black text-white font-bold mt-10 rounded-sm text-lg h-13">Login</button>
       </form>
    </div>
  </div>
  )
}

export default Login