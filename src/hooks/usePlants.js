import { useState, useEffect } from "react";
import loadingStatus from "../helpers/loadingStatus";

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
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const apiKey = import.meta.env.VITE_API_KEY;

    console.log("about to useEffect");
    useEffect (() => {
        const fetchPlants = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch("https://api.briansill.com/plants",{
                    method: 'GET',
                    headers: {
                        'X-API-KEY' : apiKey,
                        'Content-Type' : 'application/json',
                    },
                });
                const plants = await response.json();
                setPlants(plants);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }
        };
        fetchPlants();
    }, []);

    return {plants, setPlants, loadingState};

};

export default usePlants;