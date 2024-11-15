import  { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getAllUsers, getUserProfile } from "../User/UserService";
const TestPage = () => {
  const [logInEmail, setLoginEmail] = useState("");
  const [logInPassword, setLoginPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSIgnInPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInFirstname, setSignInFirstname] = useState("");
  const [signInLastname, setSignInLastname] = useState("");
  const [users,setUsers] = useState([])
  const [profile, setProfile] = useState({})
  const [error, setError] = useState('');

  const { currentUser ,currentUserUid } = useAuth();

  useEffect(() => {
    getUsersList(),
    fetchUserInfo()
  }, [])
  

  //THIS IS THE FUNCTION TO LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(logInEmail, logInPassword);

      //YOU CAN ADD LOADING ANIMATION HERE.....

      //IF THE LOGIN IS SUCCESSFUL IT WILL NAVIGATE TO THE HOME PAGE
      // navigate('/Tickify_Project/')

      alert(logInEmail + " is Logged in");
    } catch (error) {
      console.error(error.message);
    }

    //SIGN-UP METHOND
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(signInEmail, signInPassword,signInFirstname,signInLastname);
      //   navigate('/Tickify_Project/')
      getUsersList()
      // alert("Account was created for " + signInEmail);
    } catch (err) {
      setError(err.message);
      console.error(error)
    }
  };

  const getUsersList = async () => {

    try {
       const userList = await getAllUsers()

     setUsers(userList)

     console.log("Users",userList)
    } catch (error) {
      console.error(error.message)
    }
    
  }

const fetchUserInfo = async() =>{

  try {
      const userInfo = await getUserProfile(currentUserUid)
  console.log(userInfo)
  setProfile(userInfo)
  } catch (error) {
    console.error(error.message)
  }

}
  return (
    <div>
      {/* LOGIN */}

      <div>
        <p>Login</p>
        <form>
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleLogin} type="submit">
            Login
          </button>
          <button type="button">Logout</button>
        </form>
      </div>
      <br />

      {/* SIGN UP */}

      <form>
        <p>Sign in</p>
        <input
          onChange={(e) => setSignInFirstname(e.target.value)}
          type="text"
          placeholder="FirstName"
        />
        <input
          onChange={(e) => setSignInLastname(e.target.value)}
          type="text"
          placeholder="Lastname"
        />
        <input
          onChange={(e) => setSignInEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setSIgnInPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSignUp} type="submit">
          Sign Up
        </button>
      </form>


      {/* Users */}
        {users?.map((user) => (
          <div key={user.id}>
              <button>{user?.email}</button>
              {/* <button>{user.firstName}</button>
              <button>{user.lastName}</button> */}
          </div>
        ))}

        {/* Profile */}
        <div>
              <button>{profile?.email}</button>
              <button>{profile?.firstName}</button>
              <button>{profile?.lastName}</button>
        </div>


    </div>
  );
};

export default TestPage;
