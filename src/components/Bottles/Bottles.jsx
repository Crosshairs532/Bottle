import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { addtols, getstorecart } from "../../utilities/local";
import Cart from "../cart/Cart";
const Bottles = () => {
    const [bottles, setBottle] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottle(data))

    }, [])


    useEffect(() => {
        if (bottles.length > 0) {
            const datasto = getstorecart();
            const savearray = [];
            for (const i of datasto) {
                console.log(i, "iiii")
                const bo = bottles.find(bottle => bottle.id == i)
                if (bo) {
                    savearray.push(bo)
                }
            }
            console.log(savearray, "arraysave")
            setcount(savearray)
            // setcount(datasto)

        }
    }, [bottles]);
    const [count, setcount] = useState([])
    const purchase = (boot) => {
        const narr = [...count, boot];
        setcount(narr);
        addtols(boot.id);
    }
    return (
        <div>
            <h1>total bottle: {bottles.length}</h1>
            {/* <h3>Number of bottle added - {count.length}</h3> */}
            <Cart count={count} ></Cart>
            <div className="container">
                {
                    bottles.map(i => <Bottle key={i.id} i={i} purchase={purchase} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;