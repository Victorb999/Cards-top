import "../styles/globals.scss";

import styles from "../styles/app.module.scss";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (

          <div className={styles.wrapper}>
            <main>
              <Component {...pageProps} />
            </main>
          </div>

  );
}

export default MyApp;
