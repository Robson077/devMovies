import styled, { keyframes } from "styled-components"

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #ffffff;
    }

    P {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 300px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`
