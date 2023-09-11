import './bottle.css'
const Bottle = ({ i, purchase }) => {
    const { name, img, price } = i;
    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <p>price${price}</p>
            <h4>{name}</h4>
            <button onClick={() => purchase(i)}>purchase</button>
        </div>
    );
};

export default Bottle;