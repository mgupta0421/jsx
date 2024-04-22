import { useState } from "react";

function AnimalShow({ type }){

    const [clicks, setclicks] = useState(0);

    const handleClick = () => {
        setclicks(clicks + 1);
    }
    return (
        <div onClick= {handleClick}>
            {type}
        </div>
    );
}

export default AnimalShow;