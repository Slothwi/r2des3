import { Container } from "react-bootstrap";
import pikachu from "../assets/imgs/pikachuimg.png"
import "../assets/css/home.css"

const Home = () => {


    return (
    <Container className="home">
        <h1>Bienvenido Maestro Pokemon</h1>
        <img className="pikachu" src={pikachu} alt="pikachu_img" />
    </Container>
    );
};

export default Home;