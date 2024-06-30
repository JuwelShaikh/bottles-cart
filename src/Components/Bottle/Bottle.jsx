
const Bottle = ({ bottle }) => {
    const { name, price, img, seller } = bottle;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h5>Brand: {seller}</h5>
            <img src={img} alt="bottle pic" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;