import GenerateGrid from "./GenerateGrid.jsx";
export default function Src() {
    return (
        <>
            <div className="bg-white-900 h-screen">
                <div>
                    <br /><br />
                    <p className="text-center text-black font-bold text-xl">SRC Lot</p>
                    <p className="text-center text-black">Click on a spot to add or remove your car</p>
                    <br /><br />
                    <div className="mb-16">
                        <GenerateGrid rows={1} cols={14}/>
                    </div>
                    <div className="mb-16">
                        <GenerateGrid rows={2} cols={14}/>
                    </div>
                    <GenerateGrid rows={1} cols={14}/>
                </div>
            </div>
        </>
    );
}