import styled from "styled-components"

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${(props) =>
        props.changeBackground ? "#000" : "transparent"};
    transition: background-color 0.5s ease-in-out;

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
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: "";
        height: 3px;
        width: ${(props) => (props.isActive ? "100%" : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 0;
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`
