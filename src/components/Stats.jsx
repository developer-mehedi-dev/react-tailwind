import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className={`${styles.flexCenter} ss:flex-row flex-col flex-wrap `}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 sm:flex sm:text-left text-center items-center flex-row sm:mb-0 mb-12 sm:last:mb-0"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase sm:ml-3 ml-0">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
