import ParkingSpot from "./NormalParkingSpot.jsx"
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

export default function Commuter() {
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
                    <p className="text-center text-white font-bold text-xl">Commuter Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-evenly text-center">
                        <div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={1} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={2} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={3} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={4} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={5} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={6} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={7} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={8} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={9} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={10} parkingLot={"commuterLot"}/>
                            </div>
                            <br /><br />
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={11} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={12} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={13} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={14} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={15} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={16} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={17} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={18} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={19} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={20} parkingLot={"commuterLot"}/>
                            </div>
                            <br /><br />
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={21} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={22} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={23} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={24} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={25} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={26} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={27} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={28} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={29} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={30} parkingLot={"commuterLot"}/>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={31} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={32} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={33} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={34} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={35} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={36} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={37} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={38} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={39} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={40} parkingLot={"commuterLot"}/>
                            </div>
                            <br /><br />
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={41} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={42} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={43} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={44} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={45} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={46} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={47} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={48} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={49} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={50} parkingLot={"commuterLot"}/>
                            </div>
                            <br /><br />
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={51} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={52} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={53} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={54} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={55} parkingLot={"commuterLot"}/>
                            </div>
                            <div className="flex justify-center text-center">
                                <ParkingSpot number={56} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={57} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={58} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={59} parkingLot={"commuterLot"}/>
                                <ParkingSpot number={60} parkingLot={"commuterLot"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}