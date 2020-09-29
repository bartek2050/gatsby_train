import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.ul`
    padding: 0;
    list-style: none;
    font-family: Montserrat;
`;

const NavigationItem = styled.li`
    margin-left: 15px;
    position: relative;
    
    ::after {
        position: absolute;
        content: " ";
        left: -7px;
        top: 6px;
        height: 5px;
        width: 5px;
        background-color: yellow;
        background: navy;
        display: block;
    }
`;

const StyledLink = styled(Link)`
    color: navy;
    text-decoration: none;
`

const Navigation = () => (
            <NavigationWrapper>
                <NavigationItem>
                    <StyledLink to='/f16/'>F-16</StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to="/los/">LOS</StyledLink>
                </NavigationItem>
                <NavigationItem>
                    <StyledLink to="/messerschmitt/">Messerschmitt</StyledLink>
                </NavigationItem>
            </NavigationWrapper>
    );

export default Navigation;

