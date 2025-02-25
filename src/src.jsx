import ParkingSpot from "./ParkingSpot";

export default function Src() {
  return (
    <>
      <div className="bg-red-900 h-screen">
        <div>
          <br />
          <br />
          <p className="text-center text-white font-bold text-xl">SRC Lot</p>
          <p className="text-center text-white">Click on a spot to add or remove your car</p>
          <br />
          <br />
          <div className="grid grid-cols-10 text-center">
            {[...Array(10).keys()].map((i) => (
              <ParkingSpot key={i} number={i + 1} />
            ))}
          </div>
          <br /><br />
          <div className="grid grid-cols-10 text-center">
            {[...Array(10).keys()].map((i) => (
              <ParkingSpot key={i} number={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
