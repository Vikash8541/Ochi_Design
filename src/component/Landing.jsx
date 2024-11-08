import { FaArrowRightLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <>
      <section
        className="landing-section w-full h-screen px-20"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="landing-text pt-40">
          {["We Create", "Eye-opening", "Presentations"].map((text,index) => {
            return (
              <div className="maskerr" key={index}>
                <div className="text-box-image flex items-center justify-start">
                  {index === 1 && (<div className=" h-[92px] w-[140px] -mt-[4px] mr-[10px] rounded-md"><img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" className="h-full rounded-md" /></div>)}
                <h1 className="leading-none tracking-tighter">{text}</h1>
                </div>
              </div>
            );
          })}
        </div>


        <div className="py-[20px] border-t-[1px] border-[#b2b2b2] mt-20 line-text-wrap flex items-start justify-between">
          <div className=" flex items-center justify-between w-[55%]">
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((item, index) => (
              <p key={index} className="text-[#212121] text-[16px] font-['Neue Montreal'] capitalize">{item}</p>
            ))}
          </div>
          <div className="start-btn flex items-center justify-center gap-1">
            <a
              href="#"
              className="uppercase text-[#212121] border-[1px] border-[#212121] flex items-center justify-center"
            >
              Start the Project
            </a>
            <span className="size-[40px] relative flex items-center justify-center border-[1px] border-[#212121] rounded-full rotate-[318deg]">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
