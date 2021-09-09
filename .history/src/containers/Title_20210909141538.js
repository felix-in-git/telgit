import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Item } from "semantic-ui-react";
import { selectedProducts } from "../redux/actions/productActions";

const Title = () => {
    const product = useSelector((state) => state.product);
    const { name, description, avatar_url, location, twitter_username, blog } =
        product;
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const rensponse = await axios
            .get(`https://api.github.com/orgs/facebook`)
            .catch((err) => {
                console.log("Err", err);
            });

        dispatch(selectedProducts(rensponse.data));
    };

    useEffect(() => {
        fetchProductDetail();
    }, []);

    return (
        <div className="ui grid container ">
            {Object.keys(product).length === 0 ? (
                <div class="ui active dimmer">
                    <div class="ui loader"></div>
                </div>
            ) : (
                <Container style={{ marginTop: -40, marginBottom: 20 }}>
                    <Item.Group divided>
                        <Item>
                            <Item.Image src={avatar_url} size="tiny" middle aligned />
                            <Item.Content>
                                <Item.Header as="a">{name}</Item.Header>
                                <Item.Meta>
                                    <span>Date</span>
                                    <span>Category</span>
                                </Item.Meta>
                                <Item.Description>{description}</Item.Description>
                                <Item.Extra>
                                        <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" >
                                            <span>
                                                <i class="location arrow icon"></i>
                                                {location}
                                            </span>
                                        </Link>
                                        <Link to={{ pathname: JSON.stringify({ blog }) }} target="_blank" >
                                            <span>
                                                <i class="linkify icon"></i>
                                                {blog}
                                            </span>
                                        </Link>
                                        <Link to={{ pathname: "https://twitter.com/" + { twitter_username } }} target="_blank" >
                                            <span>
                                                <i class="twitter icon"></i>
                                                {twitter_username}
                                            </span>
                                        </Link>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Container>
            )}
        </div>
    );
};

export default Title;
