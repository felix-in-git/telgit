import React from "react";
import {
    Container, Segment
} from "semantic-ui-react";
import ProductListing from "./ProductListing";
import Title from "./Title";

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
