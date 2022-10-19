import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex 1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center bg-discount-gradient rounded-[10px] mb-2 py-[6px] px-4`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">25%</span> Discount for
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="sm:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your nees, we esamine annual percentage rates.
          annual fees
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient "></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
