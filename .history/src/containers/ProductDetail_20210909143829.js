import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProducts, selectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const rensponse = await axios
            .get(`https://api.github.com/orgs/${productId}/${productId}`)
            .catch((err) => {
                console.log("Err", err);
            });

        dispatch(selectedProducts(rensponse.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId]);

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div>{title}</div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
