import { Carousel } from 'antd';
import React from 'react'

export default function Home() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to Makeup shop</h1>
            <Carousel autoplay>
                <div>
                    <img style={imageStyle} alt='test' src='https://th.bing.com/th/id/R.3941d41719987413275a170608be1938?rik=bxggnhnInFuKHQ&pid=ImgRaw&r=0' />
                </div>
            </Carousel>

        </div>
    )
}

const imageStyle = {
    objectFit: "cover",
    width: "100%",
    height: "400px"
};