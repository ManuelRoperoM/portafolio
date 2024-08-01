import './styles/App.css'
import { useFilter } from './hooks/useFilters'
import { Filters } from './components/Filters'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'
import { CartProvider } from './contexts/cart'

function Store () {
  const { price, setPrice, setCategory, productsShow } = useFilter()
  return (
    <CartProvider>
      <div className='store__page'>
        <header className='store__header'> 
          <h1>Online Shopping</h1>
          <Filters price={price} setPrice={setPrice} setCategory={setCategory} />
          <ShoppingCart/>
        </header>
        <div className='store__content'>
          <Products productsShow={productsShow}/>
        </div>
      </div>
    </CartProvider>
  )
}

export default Store
