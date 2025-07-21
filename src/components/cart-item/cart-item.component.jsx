import './cart-item.styles.scss'

const CartItem = ({ item, quantity }) => {
    return (
        <div className="cart-item-container">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
                <span className='name'>{item.name}</span>


                <span>{quantity} x {item.price} $</span>
                <span>{`total :  ${item.price * quantity} $`}</span>

            </div>




        </div>
    )
}


export default CartItem;  //export the component