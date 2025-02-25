import ParkingSpot from "./SidewiseParkingSpot.jsx";

export default function Hatfield() {
    return (
        <>
            <div className="bg-red-900">
                <div>
                    <br /><br />
                    <p className="text-center text-white font-bold text-xl">Hatfield Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <ParkingSpot number={1} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={2} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={3} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={4} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={5} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={6} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={7} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={8} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={9} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={10} parkingLot={"hatfieldLot"}/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex">
                                <ParkingSpot number={11} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={12} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={13} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={14} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={15} parkingLot={"hatfieldLot"}/>
                            </div>
                            <div className="flex">
                                <ParkingSpot number={16} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={17} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={18} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={19} parkingLot={"hatfieldLot"}/>
                                <ParkingSpot number={20} parkingLot={"hatfieldLot"}/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <ParkingSpot number={21} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={22} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={23} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={24} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={25} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={26} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={27} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={28} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={29} parkingLot={"hatfieldLot"}/>
                            <ParkingSpot number={30} parkingLot={"hatfieldLot"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}