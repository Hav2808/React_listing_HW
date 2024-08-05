import data from '../data/data.json'

export type TypeItem = {
    listing_id: number
    url: string
    MainImage: {
        url_570xN: string
    }
    title: string
    currency_code: string
    price: string
    quantity: number
}

export const dataClear: TypeItem[] = []
for (let i of data) {
  if (i.error_messages){
    continue
  }
  dataClear.push(i)
}




