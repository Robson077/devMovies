import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import Logo from "../../assets/logo.png"
import { Container, Menu, Li } from "./styles.js"

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()
    // console.log(pathname)

    window.onscroll = () => {
        if (!changeBackground && window.scrollY > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.scrollY <= 150) {
            setChangeBackground(false)
        }
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="Logo dev movies" />

            <Menu>
                <Li isActive={pathname === "/"}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes("filmes")}>
                    <Link to="/filmes">Filme</Link>
                </Li>

                <Li isActive={pathname.includes("series")}>
                    <Link to="/series">Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
