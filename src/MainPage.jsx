import './App.css';
import campusOverview from './assets/Campus_overview.png';
import ParkingArea from './ParkingArea';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
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
          <p className="text-center text-white font-bold text-xl">Welcome to the Rose parking app!</p>
          <p className="text-center text-white">Click on the parking lot you are in, then click the spot you are interacting with</p>
          <br /><br />
          <img className="rounded-lg shadow-lg w-full" src={campusOverview} alt="Campus Map" useMap="#campusMap" />
          <map name="campusMap">
            <ParkingArea id="triplets" shape="rect" coords="255, 115, 345, 180" href="/triplets" label="Triplets Lot" labelStyle={{ top: '310px', left: '200px' }} />
            <ParkingArea id="lakesideNorth" shape="rect" coords="120, 265, 200, 360" href="/lakesideNorth" label="Lakeside North Lot" labelStyle={{ top: '475px', left: '50px' }} />
            <ParkingArea id="lakesideSouth" shape="circle" coords="170, 435, 45" href="/lakesideSouth" label="Lakeside South Lot" labelStyle={{ top: '595px', left: '25px' }} />
            <ParkingArea id="percopo" shape="circle" coords="320, 485, 45" href="/percopo" label="Percopo Lot" labelStyle={{ top: '710px', left: '200px' }} />
            <ParkingArea id="speed" shape="rect" coords="490, 455, 575, 555" href="/speed" label="Speed Lot" labelStyle={{ top: '710px', left: '650px' }} />
            <ParkingArea id="hatfield" shape="rect" coords="930, 370, 965, 435" href="/hatfield" label="Hatfield Lot" labelStyle={{ top: '660px', left: '950px' }} />
            <ParkingArea id="bic" shape="rect" coords="760, 120, 825, 175" href="/bic" label="BIC/KIC Lot" labelStyle={{ top: '345px', left: '820px' }} />
            <ParkingArea id="commuter" shape="rect" coords="1265, 90, 1365, 150" href="/commuter" label="Commuter Lot :(" labelStyle={{ top: '390px', left: '1300px' }} />
            <ParkingArea id="src" shape="rect" coords="550, 120, 730, 175" href="/src" label="SRC Lot" labelStyle={{ top: '315px', left: '600px' }} />
          </map>
          <br /><br />
          <p className="text-center text-white font-light">This is a proof of concept, parking spots will not accurately reflect Rose Parking</p>
        </div>
      </div>
    </>
  );
}

// export default mainPage;