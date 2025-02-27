import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

function SidewiseParkingSpot({ number, parkingLot }) {
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
    if(isClicked){
      await deleteItem();
    }else{
      await saveItem();
    }
    setIsClicked(!isClicked);
  };

  const saveItem = async () => {
    console.log("Saving item");
    try {
      await setDoc(doc(db, `${parkingLot}`, `spot-${number}`), {
        number
      });
      console.log("Document saved");
    } catch (e) {
      console.log("Error adding doc: ", e);
    }
  };

  const deleteItem = async () => {
    console.log("Deleting item");
    try {
      await deleteDoc(doc(db, `${parkingLot}`, `spot-${number}`));
      console.log("Document deleted");
    } catch (e) {
      console.log("Error adding doc: ", e);
    }
  };

  return (
    <div
      className={`border-2 border-white h-20 w-28 cursor-pointer ${
        isClicked ? "bg-red-500 text-white" : "bg-green-500 text-white"
      }`}
      onClick={handleClick}
    >
      {number}
    </div>
  );
}

SidewiseParkingSpot.propTypes = {
  number: PropTypes.number.isRequired,
  parkingLot: PropTypes.string.isRequired
};

export default SidewiseParkingSpot;