import styles from "./header.module.scss";
import logo from "../../assets/images/logo.png";
import { HeaderNav } from "./components/header-nav/header-nav";
import { HeaderSearch } from "./components/header-search/header-search";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks/use-app-selector";
import { startPage } from "../../data/ constants";

const Header = () => {
  const navigate = useNavigate();
  const { isVisible } = useAppSelector(
    (state) => state.searchVisibilityReducer
  );
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img
          className={styles.logo}
          onClick={() => {
            navigate(startPage);
          }}
          src={logo}
          alt="Логотип YouMath"
        />
        {!isVisible && <HeaderSearch />}
        <HeaderNav />
      </div>
    </header>
  );
};
export default Header;
