import React from "react";
import { Link } from "react-router-dom";
import {
    Container, Menu, Popup
} from 'semantic-ui-react';

const Header = () => {
    return (

        <Container>
            <Menu stackable>
                <Link to={`/`}>
                <Menu.Item>
                    <i class="github square icon"></i>
                    TelGit
                </Menu.Item>
                </Link>
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