import { useContext } from "react";
import navigationContext from "../navigation/navigationContext";
import navValues from "../navigation/navValues";

const PlantRow = ({ plant }) => {
    const { navigate } = useContext(navigationContext);

    return (
        <tr onClick={() => navigate(navValues.plant, plant)}>
            <td>{plant.genus}</td>
            <td>{plant.species}</td>
            <td>{plant.lastWatered}</td>
            <td>{plant.lastFed}</td>
        </tr>
    );
};

export default PlantRow;
