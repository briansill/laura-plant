import PlantRow from "./PlantRow";
import ErrorBoundary from "./ErrorBoundary";
import usePlants from "../hooks/usePlants";

const PlantList = ({selectPlant}) => {
    const {plants, setPlants} = usePlants();
    
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