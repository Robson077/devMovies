import styled from "styled-components"

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: cover;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
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
