import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';
import { useEffect, useState } from 'react';

function App() {

  const [pictureUrl, setPictureUrl] = useState(logo);
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");

  const logout = () => {
    liff.logout();
    window.location.reload();
  }

  const initLine = () => {
    liff.init({ liffId: '1656554390-dJV0qrQR' }, () => {
      if (liff.isLoggedIn()) {
        runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff.getProfile().then(profile => {
      console.log(profile);
      setDisplayName(profile.displayName);
      setPictureUrl(profile.pictureUrl);
      setStatusMessage(profile.statusMessage);
      setUserId(profile.userId);
    }).catch(err => console.error(err));
  }

  useEffect(() => {
    initLine();
  }, []);

  return (
    <div className="App">
        <img src={pictureUrl} style={{ marginLeft: "90%" }} width="60px" height="60px"/>
        <p style={{ marginLeft: "90%", wordBreak: "break-all" }}> {displayName}</p>
        <button onClick={() => logout()} style={{ width: 150, height: 30, marginLeft: "90%" }}>Logout</button>
      </div> 
  );
}

export default App;