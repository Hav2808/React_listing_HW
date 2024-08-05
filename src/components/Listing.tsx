import { FC } from "react"
import { TypeItem } from "./ItemList"
import { Items } from "./Items"


type TypePropListing = {
    data: TypeItem[]
}

export const Listing: FC<TypePropListing> = ({data}):JSX.Element => {
    return (
        <div className="item-list">
            {data.map((item)=>(
                <Items key={item.listing_id} data={item}/>
            ))}
        </div>
    )
}