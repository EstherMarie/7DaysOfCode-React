import { StyledComoConseguir } from './ComoConseguir.styled';
import { Container } from '../Container';

export function ComoConseguir() {
	return (
		<Container>
			<StyledComoConseguir id="como-fazer">
				<div className="img-area"></div>
				<div className="text-area">
					<h2>
						<span>Como conseguir </span>minha planta
					</h2>
					<ol>
						<li>Escolha suas plantas</li>
						<li>Faça seu pedido</li>
						<li>Aguarde na sua casa</li>
					</ol>
				</div>
			</StyledComoConseguir>
		</Container>
	);
}
