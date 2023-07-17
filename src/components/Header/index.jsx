import { Link } from "react-router-dom"

import Logo from "../../assets/logo.png"
import { Container, Menu, Li } from "./styles.js"

function Header() {
    return (
        <Container>
            <img src={Logo} alt="Logo dev movies" />

            <Menu>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes">Filme</Link>
                </Li>

                <Li>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
