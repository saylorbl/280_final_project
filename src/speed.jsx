import ParkingSpot from "./SidewiseParkingSpot.jsx"
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

export default function Speed() {
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
            <div className="bg-red-900">
                <div>
                    <br /><br />
                    <p className="text-center text-white font-bold text-xl">Speed Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-evenly">
                        <div className="flex justify-center flex-col text-center">
                            <ParkingSpot number={1} parkingLot={"speedLot"}/>
                            <ParkingSpot number={2} parkingLot={"speedLot"}/>
                            <ParkingSpot number={3} parkingLot={"speedLot"}/>
                            <ParkingSpot number={4} parkingLot={"speedLot"}/>
                            <ParkingSpot number={5} parkingLot={"speedLot"}/>
                            <ParkingSpot number={6} parkingLot={"speedLot"}/>
                            <ParkingSpot number={7} parkingLot={"speedLot"}/>
                            <ParkingSpot number={8} parkingLot={"speedLot"}/>
                            <ParkingSpot number={9} parkingLot={"speedLot"}/>
                            <ParkingSpot number={10} parkingLot={"speedLot"}/>
                        </div>
                        <div className="flex">
                            <div className="flex justify-center flex-col text-center">
                                <ParkingSpot number={11} parkingLot={"speedLot"}/>
                                <ParkingSpot number={12} parkingLot={"speedLot"}/>
                                <ParkingSpot number={13} parkingLot={"speedLot"}/>
                                <ParkingSpot number={14} parkingLot={"speedLot"}/>
                                <ParkingSpot number={15} parkingLot={"speedLot"}/>
                                <ParkingSpot number={16} parkingLot={"speedLot"}/>
                                <ParkingSpot number={17} parkingLot={"speedLot"}/>
                                <ParkingSpot number={18} parkingLot={"speedLot"}/>
                                <ParkingSpot number={19} parkingLot={"speedLot"}/>
                                <ParkingSpot number={20} parkingLot={"speedLot"}/>
                            </div>
                            <div className="flex justify-center flex-col text-center">
                                <ParkingSpot number={21} parkingLot={"speedLot"}/>
                                <ParkingSpot number={22} parkingLot={"speedLot"}/>
                                <ParkingSpot number={23} parkingLot={"speedLot"}/>
                                <ParkingSpot number={24} parkingLot={"speedLot"}/>
                                <ParkingSpot number={25} parkingLot={"speedLot"}/>
                                <ParkingSpot number={26} parkingLot={"speedLot"}/>
                                <ParkingSpot number={27} parkingLot={"speedLot"}/>
                                <ParkingSpot number={28} parkingLot={"speedLot"}/>
                                <ParkingSpot number={29} parkingLot={"speedLot"}/>
                                <ParkingSpot number={30} parkingLot={"speedLot"}/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex justify-center flex-col text-center">
                                <ParkingSpot number={31} parkingLot={"speedLot"}/>
                                <ParkingSpot number={32} parkingLot={"speedLot"}/>
                                <ParkingSpot number={33} parkingLot={"speedLot"}/>
                                <ParkingSpot number={34} parkingLot={"speedLot"}/>
                                <ParkingSpot number={35} parkingLot={"speedLot"}/>
                                <ParkingSpot number={36} parkingLot={"speedLot"}/>
                                <ParkingSpot number={37} parkingLot={"speedLot"}/>
                                <ParkingSpot number={38} parkingLot={"speedLot"}/>
                                <ParkingSpot number={39} parkingLot={"speedLot"}/>
                                <ParkingSpot number={40} parkingLot={"speedLot"}/>
                            </div>
                            <div className="flex justify-center flex-col text-center">
                                <ParkingSpot number={41} parkingLot={"speedLot"}/>
                                <ParkingSpot number={42} parkingLot={"speedLot"}/>
                                <ParkingSpot number={43} parkingLot={"speedLot"}/>
                                <ParkingSpot number={44} parkingLot={"speedLot"}/>
                                <ParkingSpot number={45} parkingLot={"speedLot"}/>
                                <ParkingSpot number={46} parkingLot={"speedLot"}/>
                                <ParkingSpot number={47} parkingLot={"speedLot"}/>
                                <ParkingSpot number={48} parkingLot={"speedLot"}/>
                                <ParkingSpot number={49} parkingLot={"speedLot"}/>
                                <ParkingSpot number={50} parkingLot={"speedLot"}/>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col text-center">
                            <ParkingSpot number={51} parkingLot={"speedLot"}/>
                            <ParkingSpot number={52} parkingLot={"speedLot"}/>
                            <ParkingSpot number={53} parkingLot={"speedLot"}/>
                            <ParkingSpot number={54} parkingLot={"speedLot"}/>
                            <ParkingSpot number={55} parkingLot={"speedLot"}/>
                            <ParkingSpot number={56} parkingLot={"speedLot"}/>
                            <ParkingSpot number={57} parkingLot={"speedLot"}/>
                            <ParkingSpot number={58} parkingLot={"speedLot"}/>
                            <ParkingSpot number={59} parkingLot={"speedLot"}/>
                            <ParkingSpot number={60} parkingLot={"speedLot"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}