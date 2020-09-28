import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const NavigationWrapper = styled.ul`
    padding: 0;
    list-style: none;
    font-family: Montserrat;
`;

const NavigationItem = styled.li`
    margin-left: 10px;
    position: relative;
    
    ::after {
        position: absolute;
        content: " ";
        left: -6px;
        top: 6px;
        height: 5px;
        width: 5px;
        background-color: yellow;
        background: blue;
        display: block;
    }
`;

const StyledLink = styled(Link)`
    color: navy;
    text-decoration: none;
`

const Navigation = () => {
    return (
        <>
            <NavigationWrapper>
                <StyledLink to={"/a/"}><NavigationItem>F-16</NavigationItem></StyledLink>
                <StyledLink to={"/b/"}><NavigationItem>LOS</NavigationItem></StyledLink>
                <StyledLink to={"/c/"}><NavigationItem>Messerschmitt</NavigationItem></StyledLink>
            </NavigationWrapper>
        </>
    )
};

export default Navigation;

