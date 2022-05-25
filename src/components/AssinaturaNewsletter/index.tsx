import { Container } from "../Container";
import { StyledNewsletter } from "./AssinaturaNewsletter.styled";

export function AssinaturaNewsletter() {
  return (
    <Container>
      <StyledNewsletter>
        <div className="text-area">
          <h1>
            <div className="sr-only">Casa Verde: </div>
            <div>Sua casa com </div>as melhores plantas
          </h1>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
        </div>
        <form action="">
          <label htmlFor="newsletter-input" className="sr-only">
            Insira seu e-mail
          </label>
          <input
            id="newsletter-input"
            type="email"
            placeholder="Insira seu e-mail"
          />
          <button>Assinar newsletter</button>
        </form>
      </StyledNewsletter>
    </Container>
  );
}
