import styles from "./banner.module.css";
import { bannerTitle } from "./bannerTitle.style";
function Banner({ headerText, children }) {
  /* or  Banner(prop) */
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          src="/vercel.svg"
          alt="Logo"
          className={styles.logo}
          style={bannerTitle}
        />
      </div>
      <div className="col-7 md:mt-2">
        {" "}
        {/*fallback for null, undefined, false*/}
        {children} {headerText}{" "}
      </div>
    </header>
  );
}

export default Banner;
