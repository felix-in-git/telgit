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
} from "semantic-ui-react";
import ProductComponent from "./ProductComponent";
import Title from "./Title";
import ProductListing from "./ProductListing";
import ProductFavorite from "./ProductFavorite";

const Home = () => {
    return (
        <Container>
            <Segment.Group >
                <Segment >
                    <Title />
                </Segment>
                <Segment >
                    <ProductListing />
                </Segment >
                <Segment >Content</Segment>
            </Segment.Group>
        </Container>
    );
};

export default Home;
