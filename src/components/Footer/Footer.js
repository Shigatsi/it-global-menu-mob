import React from "react";

import "./Footer.css";

function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <footer className="footer">
      <p className="footer__subtitle">Тестовое задание ITGLOBAL.COM</p>
      {width > 425 ? (
        <>
          <p className="footer__copyright">
            &#169; Евгения "Shigatsi" Зубкова {getYear()}
          </p>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <a href="https://https://itglobal.com/" className="footer__link">
                ITGLOBAL.COM
              </a>
            </li>
            <li className="foter__list-item">
              <a href="https://github.com/Shigatsi" className="footer__link">
                Github
              </a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="footer__nav">
            <li className="foter__list-item">
              <a
                href="https://https://itglobal.com/ru-ru/"
                className="footer__link"
              >
                ITGLOBAL.COM
              </a>
            </li>
            <li className="foter__list-item">
              <a href="https://github.com/Shigatsi" className="footer__link">
                Github
              </a>
            </li>
          </ul>
          <p className="footer__copyright">
            &#169;Евгения "Shigatsi" Зубкова {getYear()}{" "}
          </p>
        </>
      )}
    </footer>
  );
}

export default Footer;
