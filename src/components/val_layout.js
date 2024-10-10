import * as React from 'react'
import ValButton from './val_button'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import {
    header,
    mainHeader
} from './val_layout.module.css'

const ValBody = styled(Container)`
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    overflow: auto;
`;
const BackButCon = styled(Container)`
    display: flex;
    justify-content: center;
    margin: 4rem auto 0;
`;
const SearchBar = styled(Container)`
    justify-content: center;
    margin: 1% auto;
    width: fit-content;
`;
const SearchInput = styled.input`
    max-width: 20vw;
    border: none;

    @media (max-width: 576px) {
        font-size: 3vw;
    }
`;

const ValLayout = ({
    background,
    title,
    children,
    showSearch = true
}) => {
    // Set initial filter & setFilter state
    const [filter, setFilter] = React.useState("");

    // Handle user input for the search
    const inputChange = (e) => {
        if (setFilter) {
            setFilter(e.target.value.toLowerCase());
        }
    };

    // Handle differences between home page and secondary pages
    let head = header;
    let navPath = "/val_comp";
    let backButText = "Back to Home Page";
    let showButton = true;

    if (title === "Main") {
        head = mainHeader;
        title = '';
        if (navPath === "/") {
            showButton = false;
        } else {
            navPath = "/";
            backButText = "Back to Main Site";
        }
    }

    return (
        <ValBody fluid
            style={{backgroundImage: background}}
        >
            <header className={head}>{title}</header>
            {showSearch && setFilter && (
                <SearchBar>
                    <SearchInput 
                        type="text" 
                        placeholder="Search..." 
                        onChange={inputChange}
                        aria-label="search label"
                    />
                </SearchBar>
            )}
            {/* Pass filter & setFilter to children as props */}
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { filter, setFilter })
            )}
            {showButton && (
                <BackButCon>
                    <ValButton 
                        buttonText = {backButText}
                        navPath = {navPath}
                    />
                </BackButCon>
            )}
            <div style={{margin: "2rem"}}></div>
        </ValBody>
    )
}

export default ValLayout