import { GoogleLogin , GoogleOAuthProvider } from '@react-oauth/google';

const Google = () => {

  var REACT_APP_GOOGLE_CLIENT_ID = "1009896832838-og5i0guhj3bea9hujrptahc119agajlm.apps.googleusercontent.com";

  const handleFailure = (result) => {
    console.log(result);
  }

  const handleLogin = (googleData) => {
    alert("asldflasjfdljas;");
    console.log("fuck u");
    console.log(googleData);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
                console.log(credentialResponse.getName)
              }}
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
