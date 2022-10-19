import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`my-4 `}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flex} ${
            styles.flexCenter
          } sm:min-w-[192px] min-w-[120px] 
          ${index === clients.length - 1 ? "mb-0" : "mb-4"}`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
