import GlobalStyle from "../../styles/GlobalStyles";
import { Menu } from "../../components/Menu";
import { AssinaturaNewsletter } from "../../components/AssinaturaNewsletter";
import { ComoConseguir } from "../../components/ComoConseguir";
import { ConheĆ§aNossasOfertas } from "../../components/ConheĆ§aNossasOfertas";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <main>
        <AssinaturaNewsletter />
        <ComoConseguir />
        <ConheĆ§aNossasOfertas />
      </main>
    </>
  );
}
