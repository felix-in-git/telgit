import React from "react";
import { useSelector } from "react-redux";
import {
    Card, Grid
} from "semantic-ui-react";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    products.sort(function (a, b) {
        return b.stargazers_count.toString() - a.stargazers_count.toString();
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
                    <div class="ui action input">
                        <input type="text" class="copyInput" value="http://kushy.net/confirm/58493-2847593-3849?token=58349$3959$$8393038848" />
                        <button type="button" name="copyToken" value="copy" class="copyToken ui right icon button">
                            <i class="clipboard icon"></i>
                        </button>
                    </div>
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
