import React, { useState } from "react";
import "../styles/header.css";
import CoruselMenu from "../components/coruselMenu";

// imglar
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
  // Bayroqni yangilash uchun
  function updateFlag(e) {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const flagUrl = selectedOption.getAttribute("data-flag");
    document.getElementById("flag-icon").src = flagUrl;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("uz");

  return (
    <>
      <nav>
        <div className="lang-wrapper">
          <img id="flag-icon" src="https://flagcdn.com/w40/ru.png" alt="flag" />

          <select
            id="lang-select"
            onChange={updateFlag}
            onClick={(soz) => {
              setLang(soz.target.value);
            }}
          >
            <option value="ru" data-flag="https://flagcdn.com/w40/ru.png">
              Русский ₽
            </option>
            <option value="uz" data-flag="https://flagcdn.com/w40/uz.png">
              Uzbek UZS
            </option>
            <option value="us" data-flag="https://flagcdn.com/w40/us.png">
              English $
            </option>
          </select>
        </div>
        <div className="navbar-logo">
          <button
            class="burgerHeader remove"
            id="burgerHeader"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i
              class="fa-solid fa-bars"
              id="menu"
              style={{ display: isOpen ? "none" : "inline" }}
            ></i>
            <i
              class="fa-solid fa-xmark"
              id="xmark"
              style={{ display: isOpen ? "inline" : "none" }}
            ></i>
          </button>
          <img src={logo} alt="bu yerda  logo bor" loading="lazy" />
        </div>
        <div className="navbar-right">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
          <div className="user ahror">
            <i class="fa-solid fa-user"></i>
            <p>Войти</p>
          </div>
          <div className="love ahror">
            <i class="fa-solid fa-heart" style={{ color: "#ff0000" }}></i>
            <p>Избранное</p>
          </div>
          <div className="shopping ahror">
            <i class="fa-solid fa-cart-shopping"></i>
            <p>Корзина</p>
          </div>
        </div>
      </nav>

      <header>
        <div class="catalog">
          <div class="catalogCard" id="catalogCard">
            <button onclick="filterCategory('all')">
              <img src={catalog1} alt="catalog" />
              <p>Ommabop toifalar</p>
            </button>
            <button onclick="filterCategory('Telefon')">
              <img src={catalog2} alt="catalog" />
              <p>Telefonlar</p>
            </button>
            <button onclick="filterCategory('kompyuter')">
              <img src={catalog3} alt="catalog" />
              <p>Kompyuterlar</p>
            </button>
            <button onclick="filterCategory('Aksessuar')">
              <img src={catalog4} alt="catalog" />
              <p>Aksessuarlar</p>
            </button>
            <button onclick="filterCategory('Ayollar Kiyimlar')">
              <img src={catalog5} alt="catalog" />
              <p>Ayollar uchun kiyimlar</p>
            </button>
            <button onclick="filterCategory('Erkaklar Kiyimlar')">
              <img src={catalog6} alt="catalog" />
              <p>Erkaklar uchun kiyimlar</p>
            </button>
            <button onclick="filterCategory('Bolalar Kiyimlar')">
              <img src={catalog7} alt="catalog" />
              <p>Bolalar uchun hamma narsa</p>
            </button>
            <button onclick="filterCategory('health')">
              <img src={catalog9} alt="catalog" />
              <p>Go'zallik va salomatlik</p>
            </button>
            <button onclick="filterCategory('sport')">
              <img src={catalog10} alt="catalog" />
              <p>Sport va o'yin-kulgi</p>
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
