import React from "react"
import styled, {createGlobalStyle} from "styled-components"
import backgroundImage from "../images/aircraft-1499171_1280.jpg"
import Header from "../components/Header"
import Navigation from "../components/Navigation";

const GlobalStyles = createGlobalStyle`
   body {
padding: 0;
margin: 0;
}
`;

const TestDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`;

const Wrapper = styled.div`
    background-image: url(${backgroundImage});
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
`;


export default function Home() {
    return (
        <>
            <GlobalStyles/>
            <Navigation />
            <Wrapper>
                <Header>WELCOME! 🛩</Header>
            </Wrapper>
            <div className="hello">Hello world! 🤓</div>
            <TestDiv>TEST STYLE</TestDiv>
        </>
    )

}
