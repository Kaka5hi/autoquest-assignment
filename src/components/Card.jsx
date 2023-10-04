import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { GiSteeringWheel } from "react-icons/gi";
import { BsSpeedometer, BsHeart } from "react-icons/bs";
import { MdLocalGasStation } from "react-icons/md";


const Card = ({ info }) => {
    const { name, year, image, price, people, fuel, range, type } = info;

    return (
        <div className="card">
            <div className="inner-section">
                <div className="img-container">
                    <img src={image} alt="suv" />
                </div>
                <div className="model-and-year-info">
                    <span>{name}</span>
                    <span>{year}</span>
                </div>
                <div className="car-features">
                    <span>
                        <HiUserGroup />{people} people
                    </span>
                    <span>
                        <MdLocalGasStation />{fuel} gas
                    </span>
                    <span>
                        <BsSpeedometer />{range} km/hr
                    </span>
                    <span>
                        <GiSteeringWheel />
                        {type}
                    </span>
                </div>
                <div className="price-container">
                    <p>
                        <span>${price} </span>/month
                    </p>
                    <BsHeart />
                    <button>rent now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
