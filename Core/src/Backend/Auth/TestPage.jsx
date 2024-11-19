import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
} from "../User/UserService";
import { forgetPassword, logIn } from "./auth";
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
  const [editProfile, setEditProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState("");

  const { currentUser, currentUserUid } = useAuth();

  useEffect(() => {
    getUsersList(), fetchUserInfo();
  }, []);

  useEffect(() => {
    if (profile) {
      setEditProfile({
        firstName: profile.firstName || "",
        lastName: profile.lastName || "",
        email: profile.email || "",
      });
    }
  }, [profile]);

  //THIS IS THE FUNCTION TO LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(logInEmail, logInPassword);
      alert(logInEmail + " is Logged in");
    } catch (error) {
      console.error(error.message);
    }
  };
  //SIGN-UP METHOND
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(
        signInEmail,
        signInPassword,
        signInFirstname,
        signInLastname
      );
      getUsersList();
      alert("Account was created for " + signInEmail);
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

  const handleEditProfile = async () => {
    try {
      await updateUserProfile(currentUserUid, editProfile);
      setProfile((prevProfile) => ({
        ...prevProfile,
        ...editProfile, // Update local state
      }));
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleEditChange = async (e) => {
    const { name, value } = e.target;
    setEditProfile((prevProfile) => ({
      ...prevProfile, // Copy all existing fields from the previous state
      [name]: value, // Dynamically update the field specified by 'name' with the new value
    }));
  };

  const sendResetEmail = () =>{
    forgetPassword(resetEmail)
    
  }
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
      <ol style={{ paddingLeft: 20 }}>
        {users?.map((user) => (
          <li key={user.id}>{user?.email}</li>
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
            <input
              placeholder="FirstName"
              // value={editProfile?.firstName}
              value={editProfile.firstName}
              type="text"
              name="firstName"
              onChange={(e) => handleEditChange(e)}
            />
            <br />
            <input
              placeholder="LastName"
              type="text"
              value={editProfile.lastName}
              name="lastName"
              onChange={handleEditChange}
            />
            <br />
            <input
              placeholder="Email"
              type="text"
              value={editProfile.email}
              name="email"
              onChange={handleEditChange}
            />
            <br />
            <button type="button" onClick={handleEditProfile}>
              Edit
            </button>
          </form>
        </div>
        <h1>Forget Password</h1>
        <div>
          <form>
            <input
              placeholder="Email"
              type="email"
              name="Email"
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button onClick={sendResetEmail} type="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
