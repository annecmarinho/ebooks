
import { useState, React } from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Home.css"
import { useHistory } from "react-router-dom";

function Home() {

  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");

  function handleClick(pathName) {
    history.push(pathName);
    setCurrentPage(pathName);
  }



  return (
    <div>
      <div className="PaginaHome">

        <div className="Carrossel">
          <h3 className="Title">Livros mais populares</h3>


          <Carousel fade style={{ height: "300px", top: "100px", backgroundColor: "#C4C4C4", borderRadius: "19px", width: "900px" }} >

            <Carousel.Item style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

              <img
                style={{ margin: "16px 30px 16px 100px", width: "150px" }}
                className="d-flex"
                src="/images/Sapiens 1.png"
                alt="First slide"
              />

              <p className="DescriçãoLivro">Um dos maiores fenômenos editoriais dos últimos tempos
                O que possibilitou ao Homo sapiens subjugar as demais espécies? O que nos torna capazes das mais belas obras de arte, dos avanços científicos mais impensáveis e das mais horripilantes guerras?
                Nossa capacidade imaginativa. Somos a única espécie que acredita em coisas que não existem na natureza, como Estados, dinheiro e direitos humanos.
              </p>


            </Carousel.Item>

            <Carousel.Item style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <img
                style={{ margin: "16px 30px 16px 100px", width: "150px" }}
                className="d-flex"
                src="/images/capa-o milagre da manhã.jpg"
                alt="Second slide"
              />

              <p className="DescriçãoLivro" > O segredo para transformar sua vida antes das 8 horas. O best-seller com mais de 1 milhão de exemplares vendidos no Brasil. Neste novo clássico da autoajuda, Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades.
              </p>


            </Carousel.Item>

            <Carousel.Item style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <img
                style={{ margin: "16px 30px 16px 100px", width: "150px" }}
                className="d-flex"
                src="/images/capa- a culpa é das estrelas.jpg"
                alt="Third slide"
              />
              <p className="DescriçãoLivro">"A culpa é das estrelas" narra o romance de dois adolescentes que se conhecem (e se apaixonam) em um Grupo de Apoio para Crianças com Câncer: Hazel, uma jovem de dezesseis anos que sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões, e Augustus Waters, de dezessete, ex-jogador de basquete que perdeu a perna para o osteosarcoma.
              </p>


            </Carousel.Item>
          </Carousel>


        </div>

        <div className="Sobre" >
          <img style={{ width: "1500px", height: "500px" }} src="/images/Frame 2.png" />
          <p className="SobreText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <div className="Biblioteca">
          <h3 className="TitleBiblioteca">Biblioteca</h3>

          <div className="Bloco">
            <p className="TítuloCategoria">Clássicos Estrangeiros</p>

            <div className="Fotos">
              <img src="/images/Metamorfose 1.png" className="imagens" />
              <img src="/images/crimeecastigo.jpg" className="imagens" />
              <img src="/images/2.png" className="imagens" />
            </div>

            <Button variant="link"
              style={{
                fontFamily: "Overlock SC",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "44px",
                color: "#000000"
              }}
              onClick={() => { handleClick("/biblioteca") }} >Ver mais...</Button>

          </div>

          <div className="Bloco">
            <p className="TítuloCategoria">Romance</p>

            <div className="Fotos">
              <img src="/images/1.png" className="imagens" />
              <img src="/images/Morrodosventosuivantes 1.png" className="imagens" />
              <img src="/images/capa-a seleção 1.png" className="imagens" />
            </div>

            <Button variant="link"
              style={{
                fontFamily: "Overlock SC",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "44px",
                color: "#000000"
              }}
              onClick={() => { handleClick("/biblioteca") }}>Ver mais...</Button>

          </div>

          <div className="Bloco">
            <p className="TítuloCategoria">Clássicos Nacionais</p>

            <div className="Fotos">
              <img src="/images/Cortiço 1.png" className="imagens" />
              <img src="/images/Dom casmurro 1.png" className="imagens" />
              <img src="/images/quartodedespejo.jpg" className="imagens" />
            </div>

            <Button variant="link"
              style={{
                fontFamily: "Overlock SC",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "44px",
                color: "#000000"
              }}
              onClick={() => { handleClick("/biblioteca") }}>Ver mais...</Button>

          </div>

          <div className="Bloco">
            <p className="TítuloCategoria">Bibliografias</p>

            <div className="Fotos">
              <img src="/images/Ritalee (1) 1 (1).png" className="imagens" />
              <img src="/images/capa-diana 1 (1).png" className="imagens" />
              <img src="/images/capa-nelson mandela 1.png" className="imagens" />
            </div>

            <Button variant="link"
              style={{
                fontFamily: "Overlock SC",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "30px",
                lineHeight: "44px",
                color: "#000000"
              }}
              onClick={() => { handleClick("/biblioteca") }}>Ver mais...</Button>

          </div>

          <Button style={{
            justifyContent: "center",
            display: "flex",
            width: "900px",
            alignItems: "center",
            fontFamily: "Overlock SC",
            fontSize: "30px",
            lineHeight: "50px",
            margin: "20px 0 0 0",
            color: "#EEF4ED",
            backgroundColor: "#773344",
            borderRadius: "10px"
          }}
            onClick={() => { handleClick("/biblioteca") }}>Ver todas as categorias...</Button>

        </div>
      </div>
    </div>
  );
}

export default Home;