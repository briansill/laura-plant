import { useState } from "react";

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


const usePlants = () => {
    const [plants, setPlants] = useState(plantArray);

    // TODO call new API

    return {plants, setPlants};

};

export default usePlants;