import styles from "./styles.module.scss";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import CardAnimated from 'react-animated-3d-card'

export function Card() {
  const ref = useRef<any>(null);
  return (
    <>

      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={ref} // to use toggle method like ref.curret.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "300px", height: "400px" }} /// these are optional style, it is not necessary
      >
        <FrontSide animationDuration={2000}>
          <CardAnimated
            style={{
              backgroundColor: 'none',
              width: '300px',
              height: '400px',
              cursor: 'pointer'
            }}
            borderRadius="5px"
            onClick={() => console.log('Card clicked')}>
            <div className={styles.frontSide}>
              FRONT
            </div>
          </CardAnimated>
        </FrontSide>
        <BackSide animationDuration={2000}>
          <CardAnimated
            style={{
              backgroundColor: 'none',
              width: '300px',
              height: '400px',
              cursor: 'pointer'
            }}
            borderRadius="5px"
            onClick={() => console.log('Card clicked')}>
            <div className={styles.backSide}>
              Back
            </div>
          </CardAnimated>
        </BackSide>
      </Flippy>
    </>
  );
}
