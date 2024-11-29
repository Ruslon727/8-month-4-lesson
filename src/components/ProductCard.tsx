import React from "react";
import { ProductType } from '../service/Products'
import { Segmented } from "antd";

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
    return (
        <div className="w-[280px] flex flex-col items-center">
            <img src={item.imgURl} alt={item.name} width={260} height={260} />
            <h2 className="text-[20px] font-bold">{item.name}</h2>
            <Segmented<string> options={["тонкое", "традиционное"]} />
            <Segmented<string> options={["26 см.", "30 см.", "40 см."]} />
            <strong className="text-[22px]">от {item.price} ₽</strong>
        </div>
    )
}

export default ProductCard;