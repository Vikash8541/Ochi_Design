
import Logo from '../assets/Logo.svg';

const Navbar = () => {

    const navlinks = ['Services','Our Work','About Us','Insights','Contact Us'];

  return (
    <div>
      <header className="fixed top-0 z-[999] flex items-center justify-between py-5 px-24 w-full ">
        <div className="logo">
          <a href="#"><img src={Logo} alt="" /></a>
        </div>
        <div className="navigation-links">
            <ul className="flex items-center justify-center gap-5">
                {
                    navlinks.map((nav , index)=>(
                        <li key={index}><a href="#" className={`capitalize ${index === 4 && 'ml-48'}`}>{nav}</a></li>
                    ))
                }
            </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
