import { useContext } from "react";
import navigationContext from "../navigation/navigationContext";

const Plant = () => {
    const { param: plant} = useContext(navigationContext);

    return (
        <div className="row mh-50">
            <div className="col-6">
                <div className="row mh-50">
                    <img
                        className="img-fluid"
                        src={
                            plant.photoId ? `./plantPhotos/${plant.photoId}.jpg`
                            : ".defaultphoto.png"
                        }
                        alt="plant pic"
                    />
                </div>
            </div>
            <div className="col-6" id="Plant Descr">
                <div className="row">
                    <div className="row mt-2">
                        <h5 className="col-12">{plant.genus}</h5>
                    </div>
                    <div className="row">
                        <h3 className="col-12">{plant.species}</h3>
                    </div>
                    <div className="row">
                        <div className="col-12" mt-3>Next Watering: {plant.lastWatered}</div>
                    </div>
                    <div className="row">
                        <div className="col-12" mt-3>Next Feeding: {plant.lastFed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plant;