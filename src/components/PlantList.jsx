import { useState } from "react";
import PlantRow from "./PlantRow";
import ErrorBoundary from "./ErrorBoundary";

const plantArray = [
    {
        id: 1,
        genus: "Hoya",
        species: "Undulata",
        photoId: "undulata",
        lastWatered: "2/3/2026",
        lastFed: "1/16/2026",
    },
    {
        id: 2,
        genus: "Hoya",
        species: "Kanyakumariana",
        photoId: "kanya",
        lastWatered: "2/4/2026",
        lastFed: "1/7/2026",
    },
    {
        id: 3,
        genus: "Hoya",
        species: "Manipurensis",
        photoId: "mani",
        lastWatered: "2/5/2026",
        lastFed: "1/16/2026",
    },
    {
        id: 4,
        genus: "Hoya",
        species: "Polyneural (outer var)",
        photoId: "polyne",
        lastWatered: "2/3/2026",
        lastFed: "1/9/2026",
    },
];

const PlantList = ({selectPlant}) => {
    const [plants, setPlants] = useState(plantArray);
    const addPlant = () => {
        setPlants([
            ...plants,
            {
                id: 5,
                genus: "Hoya",
                species: "Phuwuaensis",
                photoId: "phuwua",
                lastWatered: "2/5/2026",
                lastFed: "1/21/2026",
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
                    <th>Last Watered</th>
                    <th>Last Fed</th>
                </thead>
                <tbody>
                    <ErrorBoundary fallback="Something went wrong loading the plant list. Please refresh the page.">
                        {plants.map(p => <PlantRow key={p.id} 
                            selectPlant={selectPlant} plant={p} />)}
                    </ErrorBoundary>
                </tbody>
            </table>
            <button onClick={addPlant} className="btn btn-primary">
                Add
            </button>
        </>
    );
};

export default PlantList;