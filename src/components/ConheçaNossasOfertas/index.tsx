import { StyledConheçaNossasOfertas } from "./ConheçaNossasOfertas.styled";
import { Oferta } from "./Oferta";
import { produtos } from "../../data/produtos";
import { Container } from "../Container";

export function ConheçaNossasOfertas() {
  return (
    <Container>
      <StyledConheçaNossasOfertas id="ofertas">
        <h2>
          <span>Conheça nossas </span>ofertas
        </h2>
        <ul>
          {produtos.map(({ imagem, titulo, preco }, index) => {
            return (
              <Oferta
                key={index}
                imagem={imagem}
                titulo={titulo}
                preco={preco}
              />
            );
          })}
        </ul>
      </StyledConheçaNossasOfertas>
    </Container>
  );
}
