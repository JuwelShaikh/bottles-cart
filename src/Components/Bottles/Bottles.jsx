import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleBottleCart = bottle => {
        console.log('bottle added')
    }

    return (
        <div>
            <h3>Bottles available: {bottles.length}</h3>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleBottleCart={handleBottleCart} />)
                }
            </div>
        </div>
    );
};

export default Bottles;