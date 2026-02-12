import navValues from "../navigation/navValues";
import PlantList from "./PlantList";
import Plant from "./Plant";

const ComponentPicker = ({ currentNavLocation }) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <PlantList />;
        case navValues.plant:
            return <Plant />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;