import { useState } from "react";
import PlantRow from "./PlantRow";

const plantArray = [
    {
        id: 1,
        genus: "Hoya",
        species: "Undulata",
        lastWatered: "2/3/2026",
    },
    {
        id: 2,
        genus: "Hoya",
        species: "Kanyakumariana",
        lastWatered: "2/4/2026",
    },
    {
        id: 3,
        genus: "Hoya",
        species: "Manipurensis",
        lastWatered: "2/5/2026",
    },
    {
        id: 4,
        genus: "Hoya",
        species: "Polyneural (outer var)",
        lastWatered: "2/3/2026",
    },
];

const PlantList = () => {
    const [plants, setPlants] = useState(plantArray);
    const addPlant = () => {
        setPlants([
            ...plants,
            {
                id: 5,
                genus: "Hoya",
                species: "Phuwuaensis",
                lastWatered: "2/5/2026",
            },
        ]);
    };

    return ( 
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor textCenter">
                    Plants currently in my house
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <th>Genus</th>
                    <th>Species</th>
                    <th>Photo</th>
                    <th>Last Watered</th>
                </thead>
                <tbody>
                    {plants.map(h => <PlantRow key={h.id} plant={h} />)}
                </tbody>
            </table>
            <button onClick={addPlant} className="btn btn-primary">
                Add
            </button>
        </>
    );
};

export default PlantList;