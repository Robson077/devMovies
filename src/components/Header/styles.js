import styled from "styled-components"

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;

    img {
        width: 25%;
    }
`

export const Menu = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;

    a {
        text-decoration: none;
        color: #ffffff;
    }
`
