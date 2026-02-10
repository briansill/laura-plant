
const PlantRow = ({ plant, selectPlant }) => {
    return (
        <tr onClick={() => selectPlant(plant, selectPlant = {selectPlant})}>
            <td>{plant.genus}</td>
            <td>{plant.species}</td>
            <td>{plant.lastWatered}</td>
            <td>{plant.lastFed}</td>
        </tr>
    );
};

export default PlantRow;
