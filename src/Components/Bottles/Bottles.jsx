import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    
    return (
        <div>
            <h3>Bottles available: {bottles.length}</h3>
            {
                bottles.map(botlle => <Bottle key={botlle.id} botlle={botlle}/>)
            }
        </div>
    );
};

export default Bottles;