import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Phone, Mail } from 'lucide-react';
import headerImage from 'figma:asset/d207ae304de7a2b4775b5d60171336f4b7e77413.png';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Product Manager'
      ],
      typeSpeed: 90,
      backSpeed: 90,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-[90vh] flex justify-center items-center bg-cover bg-top"
      style={{
        backgroundImage: `url(${headerImage})`
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(to top, #fff 0%, rgba(105, 90, 166, 0.35) 99%, rgba(105, 90, 166, 0.5) 100%)'
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-start px-5">
        <h1 className="m-0 p-0">
          <p 
            className="text-[50px] md:text-[50px] sm:text-[35px] text-[#212529] mb-1.5"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            HI!
          </p>
          <p 
            className="text-[60px] md:text-[60px] sm:text-[45px] xs:text-[35px] text-[#212529] mb-1.5"
            style={{ fontFamily: "'Leckerli One', sans-serif" }}
          >
            I am Stella
          </p>
        </h1>
        <h1 
          className="m-0 text-[#212529] text-[30px] md:text-[30px] sm:text-[25px] xs:text-[20px] mb-5"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          I'm into <span ref={typedRef} className="text-[#695aa6]"></span>
        </h1>
        
        {/* Contact Information */}
        <div 
          className="mt-5 text-[#212529]"
          style={{ fontFamily: "'Patrick Hand', cursive" }}
        >
          <p className="text-[20px] md:text-[20px] sm:text-[18px] mb-2 flex items-center">
            <Phone className="inline-block mr-2" size={20} color="#695aa6" /> Phone: +886980517778
          </p>
          <p className="text-[20px] md:text-[20px] sm:text-[18px] flex items-center">
            <Mail className="inline-block mr-2" size={20} color="#695aa6" /> Email: yuxiangsu0220@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}