import navValues from "../navigation/navValues";
import PlantList from "./PlantList";
import Plant from "./Plant";

const ComponentPicker = ({ currentNavLocation }) => {
    console.log("in component picker and parameter is " + currentNavLocation);
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