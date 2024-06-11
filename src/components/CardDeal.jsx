import { card } from "../assets";
import styles,{layout} from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Lorem ipsum dolor sit. <br className="sm:block hidden"/> Lorem ipsum dolor sit amet.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor, atque sed at accusantium voluptates distinctio! Asperiores voluptatem commodi accusamus?
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="" className="w-[100%] h-[100%]"/>
    </div>
  </section>
)

export default CardDeal
