import './Bottle.css';

const Bottle = ({ bottle, handleBottleCart }) => {
    const { name, price, img, seller } = bottle;
    return (
        <div className='bottle-container'>
            <h4>Name: {name}</h4>
            <h5>Brand: {seller}</h5>
            <img src={img} alt="bottle pic" />
            <p>Price: ${price}</p>
            <button onClick={()=>handleBottleCart(bottle)}>But now</button>
        </div>
    );
};

export default Bottle;