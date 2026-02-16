import PlantRow from "./PlantRow";
import ErrorBoundary from "./ErrorBoundary";
import usePlants from "../hooks/usePlants";
import LoadingIndicator from "./LoadingIndicator";
import loadingStatus from "../helpers/loadingStatus";
import { useAuth } from "react-oidc-context";


const PlantList = () => {
    const {plants, setPlants, loadingState} = usePlants();
    const auth = useAuth();
    
    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState} />

    const addPlant = () => {
        setPlants([
            ...plants,
            {
                id: 5,
                genus: "Hoya",
                species: "Phuwuaensis",
                photoId: "phuwu-1.jpg",
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
                    <tr>
                        <th>Genus</th>
                        <th>Species</th>
                        <th>Last Watered</th>
                        <th>Last Fed</th>
                    </tr>
                </thead>
                <tbody>
                    <ErrorBoundary fallback="Something went wrong loading the plant list. Please refresh the page.">
                        {plants.map(p => <PlantRow key={p.id} plant={p} />)}
                    </ErrorBoundary>
                </tbody>
            </table>
            {auth.isAuthenticated ? (
                <button onClick={addPlant} className="btn btn-primary">
                    Add
                </button>
            ) : (<div>login to add plants</div>) }
        </>
    );
};

export default PlantList;