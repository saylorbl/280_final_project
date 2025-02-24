import GenerateGrid from "./GenerateGrid.jsx";
export default function Hatfield() {
    return (
        <>
            <div className="bg-red-900 h-screen">
                <div>
                    <br /><br />
                    <p className="text-center text-white font-bold text-xl">Hatfield Lot</p>
                    <p className="text-center text-white">Click on a spot to add or remove you</p>
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