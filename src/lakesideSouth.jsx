import ParkingSpot from "./NormalParkingSpot";
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

export default function LakesideSouth() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar
                    onBic={() => {
                      navigate("/bic");
                    }}
                    onCommuter={() => {
                      navigate("/commuter");
                    }}
                    onHatfield={() => {
                      navigate("/hatfield");
                    }}
                    onSpeed={() => {
                      navigate("/speed");
                    }}
                    onPerc={() => {
                      navigate("/percopo");
                    }}
                    onLakeNorth={() => {
                      navigate("/lakesideNorth");
                    }}
                    onLakeSouth={() => {
                      navigate("/lakesideSouth");
                    }}
                    onTriplets={() => {
                      navigate("/triplets");
                    }}
                    onSrc={() => {
                      navigate("/src");
                    }}
                  />
            <div className="bg-red-900 h-screen">
                <div>
                    <br /><br />
                    <p className="text-center text-white font-bold text-xl">Lakeside South Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-center text-center">
                        <ParkingSpot number={1} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={2} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={3} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={4} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={5} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={6} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={7} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={8} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={9} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={10} parkingLot={"lakesideSouthLot"}/>
                    </div>
                    <br /><br />
                    <div className="flex justify-center text-center">
                        <ParkingSpot number={11} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={12} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={13} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={14} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={15} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={16} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={17} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={18} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={19} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={20} parkingLot={"lakesideSouthLot"}/>
                    </div>
                    <div className="flex justify-center text-center">
                        <ParkingSpot number={21} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={22} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={23} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={24} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={25} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={26} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={27} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={28} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={29} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={30} parkingLot={"lakesideSouthLot"}/>
                    </div>
                    <br /><br />
                    <div className="flex justify-center text-center">
                        <ParkingSpot number={31} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={32} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={33} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={34} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={35} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={36} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={37} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={38} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={39} parkingLot={"lakesideSouthLot"}/>
                        <ParkingSpot number={40} parkingLot={"lakesideSouthLot"}/>
                    </div>
                </div>
            </div>
        </>
    );
}