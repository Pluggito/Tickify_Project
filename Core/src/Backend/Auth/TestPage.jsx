import { useState, useEffect } from "react";
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
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");


  const pEmail = profile.email
  const { currentUser, currentUserUid } = useAuth();

  useEffect(() => {
    getUsersList(), fetchUserInfo();
  }, []);

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
      await signUp(
        signInEmail,
        signInPassword,
        signInFirstname,
        signInLastname
      );
      //   navigate('/Tickify_Project/')
      getUsersList();
      // alert("Account was created for " + signInEmail);
    } catch (err) {
      setError(err.message);
      console.error(error);
    }
  };

  const getUsersList = async () => {
    try {
      const userList = await getAllUsers();

      setUsers(userList);

      console.log("Users", userList);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserProfile(currentUserUid);
      console.log(userInfo);
      setProfile(userInfo);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      {/* LOGIN */}

      <div>
        <h1>Login</h1>
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
      <h1>SIGN UP</h1>
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
      <h1>Users</h1>
      <ol style={{paddingLeft:20}}>
        {users?.map((user) => (


            <li>{user?.email}</li>
        
        ))}
      </ol>

      {/* Profile */}
      <h1>My Profile</h1>
      <div>
        <p>{profile?.email}</p>
        <p>{profile?.firstName}</p>
        <p>{profile?.lastName}</p>
      </div>
      <div>
      <h1>Edit Profile</h1>
      <div>
        <form action="">
        <input placeholder="FirstName" value={'Email'} type="text" name="" id="" /><br/>
        <input placeholder="LastName" type="text" value={profile?.lastName} name="" id="" /><br/>
        <input placeholder="Email" type="text" value={profile?.email} name="" id="" /><br/>
        <button type="submit">Edit</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default TestPage;
