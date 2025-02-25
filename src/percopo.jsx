import ParkingSpot from "./SidewiseParkingSpot.jsx";

export default function Percopo() {
    return (
        <>
            <div className="bg-red-900">
                <div>
                    <br /><br />
                    <p className="text-center text-white font-bold text-xl">Percopo Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-evenly">
                        <div className="flex">
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={1} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={2} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={3} parkingLot={"percopoLot"}/>
                            </div>
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={4} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={5} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={6} parkingLot={"percopoLot"}/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={7} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={8} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={9} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={10} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={11} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={12} parkingLot={"percopoLot"}/>
                            </div>
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={13} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={14} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={15} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={16} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={17} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={18} parkingLot={"percopoLot"}/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={19} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={20} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={21} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={22} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={23} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={24} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={25} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={26} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={27} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={28} parkingLot={"percopoLot"}/>
                            </div>
                            <div className="flex flex-col text-center">
                                <ParkingSpot number={29} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={30} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={31} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={32} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={33} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={34} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={35} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={36} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={37} parkingLot={"percopoLot"}/>
                                <ParkingSpot number={38} parkingLot={"percopoLot"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}