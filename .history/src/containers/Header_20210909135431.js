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
                    content='This features will be comming soon.'
                    mouseEnterDelay={500}
                    mouseLeaveDelay={500}
                    on='hover'
                    trigger={<Menu.Item>About</Menu.Item>}
                />
                <Popup
                    content='This features will be comming soon.'
                    mouseEnterDelay={500}
                    mouseLeaveDelay={500}
                    on='hover'
                    trigger={<Menu.Item>Products</Menu.Item>}
                />
                <Popup
                    content='This features will be comming soon.'
                    mouseEnterDelay={500}
                    mouseLeaveDelay={500}
                    on='hover'
                    trigger={<Menu.Item>Sign-in</Menu.Item>}
                />
            </Menu>
        </Container>
    );
};

export default Header;