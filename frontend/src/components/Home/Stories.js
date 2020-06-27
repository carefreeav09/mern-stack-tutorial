import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";

const Stories = styled.img`
    width: 66px;
    height: 66px;
    border-radius: 50%;
`;

const NextItemButton = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} reactxagram-carousel-next`}
            style={{ ...style, background: "white" }}
            onClick={onClick}
        />
    );
}

const PreviousItemButton  = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} reactxagram-carousel-prev`}
            style={{ ...style, background: "white" }}
            onClick={onClick}
        />
    );
}


const StoryContainer = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 9,
        slidesToScroll: 4,
        nextArrow: <NextItemButton  className="reactxagram-carousel-prev" />,
        prevArrow: <PreviousItemButton className="reactxagram-carousel-prev"/>
    };

    return (
        <div className={'reactxagram-stories-container'}>
            <Slider {...settings}>
                <div className={'px-1'}>
                   <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                       Math.random() * 100
                   )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
                <div className={'px-1'}>
                    <Stories src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(
                        Math.random() * 100
                    )}.jpg`} />
                </div>
            </Slider>
        </div>
    )
}

export default StoryContainer;
