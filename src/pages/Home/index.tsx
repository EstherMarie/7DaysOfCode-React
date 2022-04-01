import GlobalStyle from '../../styles/GlobalStyles';
import { Menu } from '../../components/Menu';
import { AssinaturaNewsletter } from '../../components/AssinaturaNewsletter';

export default function HomePage() {
	return (
		<>
			<GlobalStyle />
			<Menu />
			<AssinaturaNewsletter />
		</>
	);
}
