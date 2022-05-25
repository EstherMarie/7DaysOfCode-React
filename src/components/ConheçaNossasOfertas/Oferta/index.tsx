import { OfertaProps } from "../../../types/ofertaProps";
import { StyledOferta } from "./Oferta.styled";

export function Oferta({ imagem, titulo, preco }: OfertaProps) {
  return (
    <StyledOferta>
      <div className="img-area">
        <img src={imagem} alt="" />
      </div>
      <div className="text-area">
        <h3>{titulo}</h3>
        <p className="preco">R$ {preco}</p>
        <a href="#" className="link-comprar">
          Comprar <span className="sr-only">{titulo}</span>
        </a>
      </div>
    </StyledOferta>
  );
}
