import React from 'react'
import { features } from '../constants';
import styles,{layout} from '../style';
import Button from './Button';

// const FeatureCard=()=(

// )

const Business = () => (
 <section className={layout.section} id='features'>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>You do the business , <br className='sm:block hidden'></br>Well handle the money.</h2>
    <p className={`max-w-[470px] ${styles.paragraph}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dicta sunt, quibusdam atque aut quam animi ea numquam est beatae, aliquam commodi. Cupiditate distinctio eum quis dicta temporibus sit, aperiam minima ipsam eveniet reiciendis velit vitae repellat quibusdam placeat! Unde cum officiis explicabo, maxime numquam consectetur libero adipisci? Deleniti, sed!</p>
    <Button props="mt-10"/>
  </div>

  <div className={`${layout.sectionImg} flex-col`}>
    {features.map((feature,index)=>(
      <FeatureCard key={feature.id} {...feature} index={index}></FeatureCard>
    ))}
  </div>
 </section>
)

export default Business
