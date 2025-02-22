import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const navigate = useNavigate()

  const [userObj , setUserOj] = useState({
    userEmail : '',
    userPass : '',
  })

  const  userValueChanged = (e) => {
     console.log(e.target.name);
     
  }



  return (
    <div className="w-[420px] mx-auto md:mt-7"> 
    <img src="/L1.png" alt="Mainimg" className="rounded-sm" />

    <div className="mt-4.5 bg-white rounded-2xl relative bottom-10 z-50 px-5.5 py-9 md:min-h-[62vh]">

      <h1 className="font-bold text-3xl">Login</h1>

       <form className="mt-9 leading-10  px-2 py-3">
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