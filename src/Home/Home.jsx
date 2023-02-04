import Featured from "../components/featured/Featured";
import NavBar from "../components/NavBar/NavBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
        <NavBar/>
        <Featured type ="movie"/>
    </div>
  )
}

export default Home