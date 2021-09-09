import React from "react";
import {
    Button,
    Container,
    Grid,
    Popup,
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
                    TelGit
                </Menu.Item>
                <Popup
                    content='Popup will hide in 500ms after leaving mouse.'
                    mouseEnterDelay={500}
                    mouseLeaveDelay={500}
                    on='hover'
                    trigger={<Button>Open After 500ms</Button>}
                >
                <Menu.Item>Features</Menu.Item>
                </Popup>
                <Menu.Item>Products</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
        </Container>
    );
};

export default Header;