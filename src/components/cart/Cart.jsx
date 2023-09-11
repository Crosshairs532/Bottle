import './cart.css'
const Cart = ({ count }) => {

    return (
        <div>
            <h4>number of bottle added:{count.length}</h4>
            <div className="img-container">
                {
                    count.map(i => <img src={i.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;