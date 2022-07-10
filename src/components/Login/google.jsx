import { GoogleLogin , GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useEffect , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import { createUser , getUserByGoogleId } from "../../actions/users";

const Google = () => {
  const REACT_APP_GOOGLE_CLIENT_ID = "1009896832838-og5i0guhj3bea9hujrptahc119agajlm.apps.googleusercontent.com";
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  const handleFailure = (result) => {
    console.log(result);
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const handleLogin = (encryptedGoogleData) => {
    document.cookie = "jwt_google="+encryptedGoogleData.credential;
    const userInfo = jwt_decode(encryptedGoogleData.credential);
    reqUser(userInfo.sub);
  }

  const reqUser = async (goog_id) => {
    await dispatch(getUserByGoogleId(goog_id));
    setUserDataLoaded(true);
  }

  useEffect(() => {
    if(userDataLoaded){
      console.log("reqUser", user, user.data);
    }
  }, [userDataLoaded]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleLogin}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </header>
    </div>
  );
}

export default Google;
