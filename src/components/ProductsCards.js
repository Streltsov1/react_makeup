import React, { useEffect, useState } from 'react';
import { Card, Flex, Button } from 'antd';
import { productsService } from '../server/products';

export default function ProductsCards() {
    const { Meta } = Card;

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await productsService.get();
        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Products</h1>
            <Flex style={{ justifyContent: "center", gap: 30 }} wrap="wrap" gap="small">
                {products.map(product => (
                    <div className="ProductCardContainer" style={{ width: "20%" }} key={product.id}>
                        <Card
                            className="ProductCard"
                            hoverable
                            style={{ width: "100%", height: "100%" }}
                            cover={<div style={{ height: 250 }}>
                                <img className="imageStyle" alt="product" src={product.image} />
                            </div>}
                        >
                            <Meta title={product.name} description={product.description} />
                            {product.discount > 0 ? (
                                <Meta title={
                                    <span>
                                        <span style={{ textDecoration: "line-through" }}>{product.price + "$"}</span>
                                        <span> {product.price - (product.price * product.discount / 100)} $</span>
                                    </span>
                                } />
                            ) : (
                                <Meta title={product.price + " $"} />
                            )}

                            <div className="buy-button-container">
                                <Button type='default' className='buy-button'>Buy</Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </Flex>
        </div>
    );
}
