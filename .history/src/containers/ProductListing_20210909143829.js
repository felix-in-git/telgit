import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from 'semantic-ui-react';
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";


const ProductListing = () => {
    const products = useSelector((state) => state)
    const dipatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://api.github.com/orgs/facebook/repos").catch((err) => {
            console.log("err ", err)
        })
        console.log(response.data)
        dipatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products: ", products)
    return (
        <div className="ui grid center aligned container" style={{ marginTop: 10, marginBottom: 10 }}>
            <Card.Group itemsPerRow={2} stackable={true} centered={true}>
                <ProductComponent />
            </Card.Group>
        </div>
    )
}

export default ProductListing