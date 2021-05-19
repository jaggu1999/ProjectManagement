import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Styles/NavBar.css";
import "./Fonts/fonts.css";
import "./Pages/IntroScreen"
import IntroScreen from "./Pages/IntroScreen";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import NavBarHome from "./Components/NavBarHome"

function App() {
  return (
    //<IntroScreen></IntroScreen>
    //<Login></Login>
    //<Signup></Signup>
    <Home></Home>
  );
}

export default App;
