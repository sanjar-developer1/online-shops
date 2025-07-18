import React, { useState } from "react";
import "../styles/header.css";
import CoruselMenu from "../components/coruselMenu";
import { useTranslation } from "react-i18next";

// Rasm importlari
import catalog1 from "../img/catalog1.svg";
import catalog2 from "../img/catalog2.svg";
import catalog3 from "../img/catalog3.svg";
import catalog4 from "../img/catalog4.svg";
import catalog5 from "../img/catalog5.svg";
import catalog6 from "../img/catalog6.svg";
import catalog7 from "../img/catalog7.svg";
import catalog9 from "../img/catalog9.svg";
import catalog10 from "../img/catalog10.svg";
import logo from "../img/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Bayroq + tilni almashtirish
  const updateFlag = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const flagUrl = selectedOption.getAttribute("data-flag");
    document.getElementById("flag-icon").src = flagUrl;

    // TILNI o'zgartirish
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <nav>
        <div className="lang-wrapper">
          <img id="flag-icon" src="https://flagcdn.com/w40/ru.png" alt="flag" />
          <select id="lang-select" onChange={updateFlag} value={i18n.language}>
            <option value="ru" data-flag="https://flagcdn.com/w40/ru.png">
              Русский ₽
            </option>
            <option value="uz" data-flag="https://flagcdn.com/w40/uz.png">
              Uzbek UZS
            </option>
            <option value="en" data-flag="https://flagcdn.com/w40/us.png">
              English $
            </option>
          </select>
        </div>

        <div className="navbar-logo">
          <button
            className="burgerHeader remove"
            id="burgerHeader"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className="fa-solid fa-bars"
              style={{ display: isOpen ? "none" : "inline" }}
            ></i>
            <i
              className="fa-solid fa-xmark"
              style={{ display: isOpen ? "inline" : "none" }}
            ></i>
          </button>
          <img src={logo} alt="logo" loading="lazy" />
        </div>

        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder={t("search")} />
            <i className="fas fa-search"></i>
          </div>
          <div className="user ahror">
            <i className="fa-solid fa-user"></i>
            <p>{t("login")}</p>
          </div>
          <div className="love ahror">
            <i className="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
            <p>{t("favorite")}</p>
          </div>
          <div className="shopping ahror">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{t("cart")}</p>
          </div>
        </div>
      </nav>

      <header>
        <div className="catalog">
          <div className="catalogCard">
            <button>
              <img src={catalog1} alt="catalog" />
              <p>{t("category.popular")}</p>
            </button>
            <button>
              <img src={catalog2} alt="catalog" />
              <p>{t("category.phones")}</p>
            </button>
            <button>
              <img src={catalog3} alt="catalog" />
              <p>{t("category.computers")}</p>
            </button>
            <button>
              <img src={catalog4} alt="catalog" />
              <p>{t("category.accessories")}</p>
            </button>
            <button>
              <img src={catalog5} alt="catalog" />
              <p>{t("category.women")}</p>
            </button>
            <button>
              <img src={catalog6} alt="catalog" />
              <p>{t("category.men")}</p>
            </button>
            <button>
              <img src={catalog7} alt="catalog" />
              <p>{t("category.children")}</p>
            </button>
            <button>
              <img src={catalog9} alt="catalog" />
              <p>{t("category.health")}</p>
            </button>
            <button>
              <img src={catalog10} alt="catalog" />
              <p>{t("category.sport")}</p>
            </button>
          </div>
        </div>

        <div className="corusel">
          <CoruselMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
