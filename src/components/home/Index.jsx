import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <header className="flex justify-between px-20 bg-black text-white items-center min-h-20">
         <div className="logo">
           <h1 className="text-3xl">🚀 WELCOME!</h1>
         </div>
         <nav>
            <ul className="flex gap-9">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
             <Link to='/login'><li>LogOut</li></Link>
            </ul>
         </nav>
      </header>
      <div className="mt-60">
        <p className="text-center text-gray-600 text-2xl">Welcome to the Home Page  </p>
      </div>
    </div>
  )
}

export default Home