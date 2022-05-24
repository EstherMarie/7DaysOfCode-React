import React from "react";
import { StyledMenu, StyledList } from "./Menu.styled";
import LogoCasaVerde from "/assets/logo.svg";
import { Container } from "../Container";

export function Menu() {
  return (
    <StyledMenu>
      <Container>
        <h1>
          <img src={LogoCasaVerde} alt="Casa Verde Logo" />
        </h1>

        <nav>
          <StyledList>
            <li>
              <a href="#como-fazer">Como fazer</a>/
            </li>
            <li>
              <a href="#ofertas">Ofertas</a>/
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>/
            </li>
            <li>
              <a href="#videos">Vídeos</a>/
            </li>
            <li>
              <a href="#carrinho">Meu carrinho</a>
            </li>
          </StyledList>
        </nav>
      </Container>
    </StyledMenu>
  );
}
