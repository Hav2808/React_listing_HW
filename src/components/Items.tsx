import { FC } from "react";
import { TypeItem } from "./ItemList";

type TypePropItems = {
    data: TypeItem
}

export const Items: FC<TypePropItems> = ({data}):JSX.Element => {
    const checkCurrency = (currency:string) => {
        if (currency == 'USD') {
            return `$${data.price}`
        }
        else if (currency == 'EUR'){
            return `€${data.price}`
        }
        else {
            return `${data.price}${data.currency_code}`
        }
    }

    const checkQuantity = (quantity:number) => {
        if (quantity <= 10 && quantity > 0) {
            return 'level-low'
        }
        else if (quantity <= 20 && quantity > 10) {
            return 'level-medium'
        }
        else if (quantity > 20) {
            return 'level-high'
        }
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={data.url}>
                    <img src={data.MainImage?.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{data.title.length < 50 ? data.title : `${data.title.slice(0, 50)}...`}</p>
                <p className="item-price">{checkCurrency(data.currency_code)}</p>
                <p className={`item-quantity ${checkQuantity(data.quantity)}`}>{data.quantity} left</p>
            </div>
        </div>    
    )
}