const Featured = () => {
  return (
    <>
      <div className="featured w-full h-auto bg-[#f1f1f1] p-20">
        <h2 className="pb-10 border-b-2 border-b-zinc-300 text-[#212121] text-[4vw]  font-['Neue_Montreal']">
          Featured projects
        </h2>

        <div className="cards-main mt-10 w-full h-full">
          <div className="cards-container h-full w-full flex items-center justify-between gap-8 pb-20 relative">
            <div className="middle-text absolute text-[8vw] font-['Neue_Montreal'] uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-[#cdea68]">
                {"FYDE".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h3>
            </div> 
            <div className="middle-text absolute text-[8vw] font-['Neue_Montreal'] uppercase top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-[#cdea68]">
                {"VISE".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </h3>
            </div>
            <div className="cards w-1/2 h-[70vh]">
              <h6 className="pl-4 relative text-[15px] uppercase text-[#212121] font-['Neue_Montreal']">
                Fyde
              </h6>
              <div className="card-mini h-full w-full pt-5">
                <img
                  className="rounded-xl h-full w-full"
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                />
              </div>
              <div className="features-details flex items-start justify-start gap-3 mt-7 w-auto">
                {["audit","copywriting","sales deck","slides design"].map((item,index)=>{
                  return (
                  <div className="features-box" key={index}>
                    <a href="#" className="border-[#212121] font-['Neue_Montreal'] border-[1px] px-4 py-1.5 font-medium rounded-full uppercase text-[#212121]">{item}</a>
                  </div>
                  )
                })}
              </div>
            </div>
            <div className="cards w-1/2 h-[70vh]">
              <h6 className="pl-4 relative text-[15px] uppercase text-[#212121] font-['Neue_Montreal']">
                VISE
              </h6>
              <div className="card-mini h-full w-full pt-5">
                <img
                  className="rounded-xl h-full w-full"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                  alt=""
                />
              </div>
              <div className="features-details flex items-start justify-start gap-3 mt-7 w-auto">
                {["agency","company presentation"].map((item,index)=>{
                  return (
                  <div className="features-box" key={index}>
                    <a href="#" className="border-[#212121] font-['Neue_Montreal'] border-[1px] px-4 py-1.5 font-medium rounded-full uppercase text-[#212121]">{item}</a>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
