import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

function NormalParkingSpot({ number, parkingLot }) {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, `${parkingLot}`, `spot-${number}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setIsClicked(docSnap.data().occupied);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [number, parkingLot]);

  const handleClick = async () => {
    setIsClicked(!isClicked);
    await save(!isClicked);
  };

  const save = async (occupied) => {
    console.log("Write to the firestore database");
    try {
      await setDoc(doc(db, `${parkingLot}`, `spot-${number}`), {
        number,
        occupied,
      });
      console.log(`Document written with ID: spot-${number}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className={`border-2 border-white h-28 w-20 cursor-pointer ${
        isClicked ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
      onClick={handleClick}
    >
      {number}
    </div>
  );
}

NormalParkingSpot.propTypes = {
  number: PropTypes.number.isRequired,
  parkingLot: PropTypes.string.isRequired
};

export default NormalParkingSpot;