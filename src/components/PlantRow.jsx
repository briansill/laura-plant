
const PlantRow = ({ plant }) => {
    return (
        <tr>
            <td>{plant.genus}</td>
            <td>{plant.species}</td>
            <td><img src={plant.picture} alt="image n/a" /></td>
            <td>{plant.lastWatered}</td>
        </tr>
    );
};

export default PlantRow;
