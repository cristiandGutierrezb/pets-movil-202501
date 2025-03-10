export interface StandardResponseDAO {
  status: number
  message: string
}

export interface GetProductsServiceDAO extends StandardResponseDAO {
  data: ProductDAO[]
}

export interface ProductDAO {
  id_product: number
  title: string
  value: number
  description: string
  stock: number
  state_id: number
}