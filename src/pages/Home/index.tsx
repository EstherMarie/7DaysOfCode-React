import GlobalStyle from "../../styles/GlobalStyles";
import { Menu } from "../../components/Menu";
import { AssinaturaNewsletter } from "../../components/AssinaturaNewsletter";
import { ComoConseguir } from "../../components/ComoConseguir";

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <main>
        <AssinaturaNewsletter />
        <ComoConseguir />
      </main>
    </>
  );
}
