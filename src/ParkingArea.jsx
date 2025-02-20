/* eslint-disable react/prop-types */
import { useState } from 'react';
import "./App.css"

function ParkingArea({ id, shape, coords, href, label, labelStyle }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <area
        id={id}
        shape={shape}
        coords={coords}
        href={href}
        alt={label}
        onMouseOver={() => setVisible(true)}
        onMouseOut={() => setVisible(false)}
      />
      <div
        id={`${id}Label`}
        className={`bg-black inline-block absolute ${visible ? '' : 'invisible'}`}
        style={labelStyle}
      >
        <p className="text-white">{label}</p>
      </div>
    </>
  );
}

export default ParkingArea
