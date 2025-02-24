/* eslint-disable react/prop-types */
export default function GenerateGrid({ rows, cols }) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 1; j <= cols; j++) {
        row.push(
          <div key={`${i}-${j}`} className="border-1 border-black">
            {j}
          </div>
        );
      }
      grid.push(
        <div key={i} className={`grid grid-cols-${cols} h-56 text-center`}>
          {row}
        </div>
      );
    }
    return <>{grid}</>;
  }
