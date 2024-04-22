import ProfileCard from "./ProfileCard";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getAnimal() {
    const animals = ['bird', 'cow', 'dog', 'cat'];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
const [animals, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animals,getAnimal()]);
   };

   const renderAnimals = animals.map((animal,index) => {
    return <AnimalShow type = {animal} key = {index} />

   })

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div> {renderAnimals} </div>
        </div>
    );
}

export default App;