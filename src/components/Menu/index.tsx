import React from "react";
import { StyledMenu, StyledList } from "./Menu.styled";
import LogoCasaVerde from "/assets/logo.svg";
import { Container } from "../Container";

export function Menu() {
  return (
    <StyledMenu>
      <Container>
        <a href="#">
          <img src={LogoCasaVerde} alt="Casa Verde Logo" />
        </a>

        <nav>
          <StyledList>
            <li>
              <a href="#como-fazer">Como fazer</a>/
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>/
            </li>
            <li>
              <a href="#">Depoimentos</a>/
            </li>
            <li>
              <a href="#">Vídeos</a>/
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
