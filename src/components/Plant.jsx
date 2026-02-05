
const Plant = ({plant}) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img
                        className="img-fluid"
                        src={
                            plant.photoId ? `./plantPhotos/${plant.photoId}.jpeg`
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
                        <h3 className="col-12" mt-3>Next Watering: {plant.lastWatered}</h3>
                    </div>
                    <div className="row">
                        <h3 className="col-12" mt-3>Next Feeding: {plant.lastFed}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};