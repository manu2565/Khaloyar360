import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <a _ngcontent-qeq-c22="" className="dropdown-item" onClick={toggleTheme} style={{ cursor: "pointer" }}>
      <form
        _ngcontent-qeq-c22=""
        noValidate=""
        className="cursor ng-untouched ng-pristine ng-valid"
      >
      <span>
          <i
            _ngcontent-qeq-c22=""
          className={`fa ${theme === "light" ? "fa-moon" : "fa-sun"}`}
          style={{ fontSize: "18px", marginRight: "10px", color: "var(--icon-color)" }}
        />
        {theme === "light" ? "Dark Theme" : "Light Theme"}
        </span>
      </form>
    </a>
  );
}

export default ThemeToggle;
