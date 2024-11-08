import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  const text = [
    "raise funds",
    "sell products",
    "explain complex ideas",
    "hire great people",
  ];
  return (
    <div className="about py-20 w-full h-auto bg-[#cdea68] rounded-tl-2xl rounded-tr-2xl">
      <h2 className="px-20 text-[#212121] text-[3.7vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to&nbsp;
        {text.map((item, index) => (
          <span key={index}>
            <a className="common-anim" href="#">{item}</a>
            {index < text.length - 1 ? ", " : "."}
            {index === text.length - 2 && "and "}
          </span>
        ))}
      </h2>

        <div className="flex items-start justify-between  except border-t-[1px] border-[#99ad53] border-b-[1px] w-full py-[40px] px-20 mt-[60px] mb-[40px]">
          <h5 className="text-[17px]">What you can expect:</h5>
          <div className="text-p flex flex-col gap-4 w-[30%]">
            <p className="text-[17px]">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <p className="text-[17px]">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[17px]">S:</p>
            <div className="social-link flex flex-col">
            {["Instagram","Behance","Facebook","Linkedln"].map((link,index)=>(
              <a className="common-anim" href="#" key={index}>{link}</a>
            ))}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between px-20 py-2">
          <div className="approach flex flex-col gap-2 mt-[-30px] w-1/2">
            <h3 className="text-[3.2rem] text-[#212121] font-['Neue_Montreal']">Our approach:</h3>
            <a href="#" className="flex items-center justify-between  bg-[#212121] py-[7px] pl-[20px] pr-[10px] w-[185px] text-white text-[17px] tracking-normal rounded-full font-['Founders_Grotesk'] uppercase"><span className="mt-[5px]">Read More</span><span className="bg-white rounded-full h-[50px] w-[50px] flex items-center justify-center text-black"><FaArrowRightLong /></span></a>
          </div>
          
          <div className="approach-img w-1/2">
            <img className="rounded-xl h-[70vh]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
            
        </div>
          
    </div>
  );
};

export default About;
