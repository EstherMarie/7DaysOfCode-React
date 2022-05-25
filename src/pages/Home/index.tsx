import GlobalStyle from "../../styles/GlobalStyles";
import { Menu } from "../../components/Menu";
import { AssinaturaNewsletter } from "../../components/AssinaturaNewsletter";
import { ComoConseguir } from "../../components/ComoConseguir";
import { ConheçaNossasOfertas } from "../../components/ConheçaNossasOfertas";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <main>
        <AssinaturaNewsletter />
        <ComoConseguir />
        <ConheçaNossasOfertas />
      </main>
    </>
  );
}
