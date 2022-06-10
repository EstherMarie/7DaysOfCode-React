import { useEffect, useState } from "react";
import { StyledMenu, StyledList, StyledMenuIcon } from "./Menu.styled";
import { Container } from "../Container";
import LogoCasaVerde from "/assets/svg/logo.svg";
import { FiMenu } from "react-icons/fi";

export function Menu() {
  const [hasScroll, setHasScroll] = useState(false);
  const [isListShowing, setIsListShowing] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScroll(window.pageYOffset > 50);
    });
  }, []);

  useEffect(() => {
    document.querySelector("button")?.addEventListener("keyup", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        setIsListShowing(!isListShowing);
      }
    });
  });

  return (
    <StyledMenu hasScroll={hasScroll}>
      <Container>
        <a href="#">
          <img src={LogoCasaVerde} alt="Casa Verde Logo" />
        </a>

        <nav>
          <StyledMenuIcon>
            <FiMenu
              onClick={() => {
                setIsListShowing(!isListShowing);
              }}
              aria-label={!isListShowing ? "Abrir Menu" : "Fechar menu"}
            />
          </StyledMenuIcon>
          <StyledList hasScroll={hasScroll} isListShowing={isListShowing}>
            <li>
              <a href="#como-fazer">Como fazer</a>
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
            <li>
              <a href="#">Vídeos</a>
            </li>
            <li>
              <a href="#">Meu carrinho</a>
            </li>
          </StyledList>
        </nav>
      </Container>
    </StyledMenu>
  );
}
