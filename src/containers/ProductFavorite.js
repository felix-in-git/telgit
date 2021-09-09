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

const ProductFavorite = () => {
    const products = useSelector((state) => state.allProducts.products);
    const { id, name, image, description, full_name } = products;

    return (
        <Grid container columns={2} stackable>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">{name[0]}</div>
                            <div class="description">
                                {description}
                            </div>
                            <div class="full_name">
                                {description}
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">Jenny Hess</div>
                            <div class="description">
                                "Jenny is a student stu
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">Jenny Hess</div>
                            <div class="description">
                                "Jenny is a student stu
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">Jenny Hess</div>
                            <div class="description">
                                "Jenny is a student stu
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">Jenny Hess</div>
                            <div class="description">
                                "Jenny is a student stu
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
            <Grid.Column>
                <Segment>
                    <div class="card">
                        <div class="content">
                            <div class="header">Jenny Hess</div>
                            <div class="description">
                                "Jenny is a student stu
                            </div>
                        </div>
                        <div class="ui bottom attached button">
                            <i class="add icon"></i>
                            Add Friend
                        </div>
                    </div>

                </Segment>
            </Grid.Column>
        </Grid>
    );

    const renderList = products.map((products) => {


    });

    return <>{renderList}</>;
};

export default ProductFavorite;
