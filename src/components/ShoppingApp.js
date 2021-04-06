import { useState } from "react"
import ShoppingList from "./ShoppingList"
import AddPopularProducts from "./AddPopularProducts"
import AddProductForm from "./AddProductForm"

const ShoppingApp = () => {
  const [shopping, setShopping] = useState(["curry", "cumin", "café"])

  const addToShoppingList = (product) => {
    setShopping([...shopping, product])
  }

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter(el => el !== product))
  }

  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList shopping={shopping} removeFromShoppingList={removeFromShoppingList} />
      </section>
      <section className="col-lg-4">
        <div className="bg-light border p-4">
          <h2 className="mb-3 h4">Ajouter un produit :</h2>
          <AddProductForm shopping={shopping} addToShoppingList={addToShoppingList} />
          <AddPopularProducts shopping={shopping} addToShoppingList={addToShoppingList} />
        </div>
      </section>
    </main>
  )
}

export default ShoppingApp