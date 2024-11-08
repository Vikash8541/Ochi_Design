import { useState } from "react";
import { useEffect } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // we get the value of x and y while mouse move.
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // We find deltaX and deltaY , to find the difference between the line of mousemove and mid point of the page , why we find mid point of the page -> to know where we move the mouse actually.

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Now , we find the angle value and convert into deg so the formula is -> 180 / Math.PI = 57.29deg i.e = 1 radian

      // formula - let value = Math.atan2(y,x) * (180 / Math.PI); 
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Now set the angle value into setRotate value in useState hooks -> we need to minus the angle value from - 180 , to get correct direct.
      setRotate(angle - 180);
    });
  });

  return (
    <>
      <div className="eyes w-full h-screen bg-[#f3f3f3] overflow-hidden relative">
        <div className="bg-eye-green">
          <div className="absolute eye-ball  flex items-center justify-center gap-10">
            <div className="relative flex items-center justify-center white-circle h-[200px] w-[200px] rounded-full bg-white">
              <div className="black-circle white-circle absolute h-[130px] w-[130px] rounded-full bg-[#212121] overflow-hidden">
                <div
                  style={{
                    transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute h-6 w-full"
                >
                  <div className="white-eye  absolute h-6 w-6 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center white-circle h-[200px] w-[200px] rounded-full bg-white">
              <div className="black-circle white-circle absolute h-[130px] w-[130px] rounded-full bg-[#212121] overflow-hidden">
                <div
                  style={{
                    transform: `translate(-50% ,-50%) rotate(${rotate}deg)`,
                  }}
                  className=" line absolute h-6 w-full"
                >
                  <div className="white-eye  absolute h-6 w-6 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
