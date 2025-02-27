import NormalParkingSpot from "./NormalParkingSpot.jsx";
import SidewiseParkingSpot from "./SidewiseParkingSpot.jsx";
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

export default function LakesideNorth() {
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
                    <p className="text-center text-white font-bold text-xl">Lakeside North Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
                    <br /><br />
                    <div className="flex justify-between">
                        <div className="flex flex-col text-center">
                            <SidewiseParkingSpot number={1} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={2} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={3} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={4} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={5} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={6} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={7} parkingLot={"lakesideNorthLot"}/>
                        </div>
                        <div>
                            <div className="flex text-center justify-center">
                                <NormalParkingSpot number={8} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={9} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={10} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={11} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={12} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={13} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={14} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={15} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={16} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={17} parkingLot={"lakesideNorthLot"}/>
                            </div>
                            <br /><br />
                            <div className="flex text-center justify-center">
                                <NormalParkingSpot number={18} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={19} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={20} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={21} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={22} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={23} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={24} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={25} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={26} parkingLot={"lakesideNorthLot"}/>
                                <NormalParkingSpot number={27} parkingLot={"lakesideNorthLot"}/>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <SidewiseParkingSpot number={28} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={29} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={30} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={31} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={32} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={33} parkingLot={"lakesideNorthLot"}/>
                            <SidewiseParkingSpot number={34} parkingLot={"lakesideNorthLot"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}