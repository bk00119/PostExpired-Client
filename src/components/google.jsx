import GoogleLogin from 'react-google-login';

const Google = () => {

  var REACT_APP_GOOGLE_CLIENT_ID = "1088621816105-ndmppqog3fng702c9lhdenb1rck5he0o.apps.googleusercontent.com";

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
        <h1>Google Authentication</h1>
        <div>
          <GoogleLogin
            className="login"
            clientId = {REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess = {handleLogin}
            buttonText = "Log in with Google"
            onFailure = {handleFailure}
            cookiePolicy = {'single_host_origin'}
          >
          </GoogleLogin>
        </div>
      </header>
    </div>
  );
}

export default App;
