import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Card,
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from "semantic-ui-react";
import Title from "./Title";
import ProductListing from './ProductListing';
import axios from 'axios';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    products.sort(function (a, b) {
        return a.stargazers_count.toString().localeCompare(b.stargazers_count.toString());
    });

    const renderList = products.map((products) => {
        const { id, name, image, description, full_name, stargazers_count, forks_count, language } = products;
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{full_name}</span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Grid columns={3} stackable>
                        <Grid.Column>
                            <i class="file alternate icon"></i>
                            {language}
                        </Grid.Column>
                        <Grid.Column>
                            <i class="star icon"></i>
                            {stargazers_count}
                        </Grid.Column>
                        <Grid.Column>
                            <i class="wrench icon"></i>
                            {forks_count}
                        </Grid.Column>
                    </Grid>
                </Card.Content>
            </Card>



        );
    });

    return <>{renderList}</>;
};

export default ProductComponent;
