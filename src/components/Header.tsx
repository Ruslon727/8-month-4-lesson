import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/Images/Logo.svg'
import { BasketIcon } from "../assets/Icon/Icon";
import React from "react";

interface HeaderType {
    basketCount: number
    totalPrice: number
}

const Header: React.FC<HeaderType> = ({ basketCount, totalPrice }) => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center pb-[40px] border-b-[2px] border-[#b9b9b9] justify-between">
            <Link className="flex items-center" to={"/"}>
                <img src={Logo} alt="Site Logo" width={38} height={38} />
                <div className="ml-[17px]">
                    <h1 className="text-[22px] leading-[29.23px] font-bold">
                        REACT PIZZA
                    </h1>
                    <p className="text-[16px] leading-[19.49px] text-[#7B7B7B]">
                        самая вкусная пицца во вселенной
                    </p>
                </div>
            </Link>
            <button onClick={() => navigate("/basket")} className="w-[150px] flex items-center justify-center gap-[13px] cursor-pointer py-[12px] bg-[#FE5F1E]">
                <strong className="text-[16px]">{totalPrice} ₽</strong>
                <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF40]"></span>
                <div className="flex items-center space-x-[8px]">
                    <BasketIcon />
                    <span>{basketCount}</span>
                </div>
            </button>
        </div>
    )
};

export default Header