import styles from "./style";

import { Billing,Business,Button,CardDeal,Clients,CTA,FeedbackCard,Footer,GetStarted,Hero,Navbar,Stats,Testimonial } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> <p className="text-white"><Navbar/></p></div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <p className="text-white"><Hero/></p>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <p className="text-white">
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonial/>
            <Clients/>
            <CTA/>
            <Footer/>
          </p>
      </div>
    </div>

  </div>
);

export default App;
