import { useContext } from "react";
import styles from "./banner.module.css";
import { bannerTitle } from "./bannerTitle.style";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";
function Banner({ headerText, children }) {
  const { navigate } = useContext(navigationContext);
  /* or  Banner(prop) */
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img
          onClick={() => navigate(navValues.home, null)}
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
