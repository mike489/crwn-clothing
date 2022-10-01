import {
  signInWithGooglePopup,
  creatUserDOcumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDOcumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popups</button>
    </div>
  );
};

export default SignIn;
