import React from "react";
import {
    Button,
    Container,
    Grid,

    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react'

const Header = () => {
    return (

        <Container>
            <Menu stackable>
                <Menu.Item>
                    <i class="twitter icon"></i>
                    TelGitf
                </Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Products</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
        </Container>
    );
};

export default Header;