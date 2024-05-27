import remeraroja from "../assets/img/carlo/remeraroja.jpeg";
import Figure from 'react-bootstrap/Figure';

function Home() {
  return (
    <Figure>
      <Figure.Image
        width={"100%"}
        // height={180}
        alt=""
        src={remeraroja}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default Home;