import { useContext } from "react"
import { UseProductsContextType } from "../context/PorductsProvider"
import ProductsContext from "../context/PorductsProvider"

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts