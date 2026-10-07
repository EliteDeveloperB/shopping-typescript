export interface Root {
  products: Products[]
}

export interface Products {
  id: string
  title: string
  images: string
  price: number
  descripction: string
}
