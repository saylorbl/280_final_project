import ParkingSpot from "./NormalParkingSpot";

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
          <div className="flex justify-center text-center">
            <ParkingSpot number={1} parkingLot={"srcLot"}/>
            <ParkingSpot number={2} parkingLot={"srcLot"}/>
            <ParkingSpot number={3} parkingLot={"srcLot"}/>
            <ParkingSpot number={4} parkingLot={"srcLot"}/>
            <ParkingSpot number={5} parkingLot={"srcLot"}/>
            <ParkingSpot number={6} parkingLot={"srcLot"}/>
            <ParkingSpot number={7} parkingLot={"srcLot"}/>
            <ParkingSpot number={8} parkingLot={"srcLot"}/>
            <ParkingSpot number={9} parkingLot={"srcLot"}/>
            <ParkingSpot number={10} parkingLot={"srcLot"}/>
          </div>
          <br /><br />
          <div className="flex justify-center text-center">
            <ParkingSpot number={11} parkingLot={"srcLot"}/>
            <ParkingSpot number={12} parkingLot={"srcLot"}/>
            <ParkingSpot number={13} parkingLot={"srcLot"}/>
            <ParkingSpot number={14} parkingLot={"srcLot"}/>
            <ParkingSpot number={15} parkingLot={"srcLot"}/>
            <ParkingSpot number={16} parkingLot={"srcLot"}/>
            <ParkingSpot number={17} parkingLot={"srcLot"}/>
            <ParkingSpot number={18} parkingLot={"srcLot"}/>
            <ParkingSpot number={19} parkingLot={"srcLot"}/>
            <ParkingSpot number={20} parkingLot={"srcLot"}/>
          </div>
        </div>
      </div>
    </>
  );
}
