import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/"); // go home
    else navigate("/login"); // send to login
  }, [isLoggedIn]);

  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
