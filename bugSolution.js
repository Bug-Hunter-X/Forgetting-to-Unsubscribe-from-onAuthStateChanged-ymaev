import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig'; //Import your Firebase configuration

function MyComponent(){
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); //Unsubscribe on component unmount
  }, []);

  return (
    <div>
      {user ? <p>User is signed in: {user.uid}</p> : <p>User is signed out</p>}
    </div>
  );
}

export default MyComponent;