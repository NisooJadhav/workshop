import React from 'react';

export default function Clock() {
  const clock = () => {
    const d = new Date();
    let h = d.getHours().toString().padStart(2, '0');
    let m = d.getMinutes().toString().padStart(2, '0');
    //let s = d.getSeconds().toString().padStart(2, '0');
    var ampm;
    if (h >= "00" && h <= "11") {
      ampm = "AM";
    }
    else if (h > "11") {
      ampm = "PM";
    }
    document.querySelector(".clock").innerHTML = h + ':' + m + ' ' + ampm;
  }
  setInterval(clock, 1000);

  return (
    <>
      <p align="right"
        style={{ verticalAlign: "center", color: "aliceblue", margin: "0", padding: "0", position: "sticky", top: "0", zIndex: "6", background: "#000", paddingRight: "10px", paddingTop: "5px" }} className="clock"></p>
    </>
  );
}