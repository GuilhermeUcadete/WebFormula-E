import React, { useState, useEffect } from 'react';
import './body.css';

const Body = () => {
  const [valorInput, setValorInput] = useState('');

  const [valoresSalvos, setValoresSalvos] = useState([]);

  useEffect(() => {
    const valoresNoLocalStorage = localStorage.getItem('meusValores');
    if (valoresNoLocalStorage) {
      setValoresSalvos(JSON.parse(valoresNoLocalStorage)); 
    }
  }, []);

  const salvarNoLocalStorage = () => {
    if (valorInput.trim() === '') return;

    const novosValores = [...valoresSalvos, valorInput]; 
    setValoresSalvos(novosValores); 

    localStorage.setItem('meusValores', JSON.stringify(novosValores)); 
    setValorInput(''); 
  };

  return (
    <div>
      <h2>Contextualização do Problema</h2>
      <p>
      A falta de popularidade da Fórmula E vem, em grande parte, da falta de tradição e conexão emocional com o público. Ao contrário da Fórmula 1, que tem décadas de história e circuitos icônicos, a Fórmula E é nova e ainda não conquistou aquele “charme” que atrai os fãs. Outro ponto é o som dos carros elétricos, que é muito mais silencioso que os motores a combustão, tirando um pouco da emoção que muitos associam às corridas.

      Além disso, a cobertura da mídia é limitada. Enquanto a Fórmula 1 está em todas as grandes redes e tem uma enorme base de fãs, a Fórmula E não tem o mesmo alcance, o que dificulta a entrada de novos espectadores. Também pesa o fato de muitos verem a categoria apenas como uma "alternativa ecológica", sem o mesmo glamour ou apelo dramático. Isso afasta o público mais tradicional, e a categoria ainda luta para criar uma base de fãs apaixonada e fiel.
      </p>

      <section>
        <h1>Soluções para o problema</h1>
        <ul id="objetivos">
          <li><h3>Identificação de Influenciadores</h3></li>
          <p>A primeira etapa envolve a pesquisa e seleção de influenciadores relevantes que já têm uma audiência engajada em temas de tecnologia e sustentabilidade, bem como criadores de conteúdo focados em jogos de corrida. Esses influenciadores devem compartilhar valores alinhados à missão da Fórmula E.</p>

          <li><h3>Criação de Conteúdo Educativo</h3></li>
          <p>Em colaboração com esses influenciadores, serão desenvolvidos conteúdos educativos que expliquem os benefícios da Fórmula E, como as inovações tecnológicas dos carros elétricos e a importância da mobilidade sustentável. Isso pode incluir vídeos, blogs, postagens em redes sociais e até podcasts. A ideia é que esse conteúdo seja envolvente e informativo, gerando discussões e engajamento nas comunidades online.</p>

          <li><h3>Experiências Interativas</h3></li>
          <p>Serão organizadas experiências interativas, como eventos ao vivo ou webinars, onde influenciadores podem discutir suas experiências com a Fórmula E, realizar sessões de perguntas e respostas e promover corridas virtuais. Isso permite que a audiência tenha uma experiência mais profunda e interativa, facilitando a conexão com a categoria.</p>

          <li><h3>Promoção de Eventos Virtuais</h3></li>
          <p>A implementação de corridas virtuais em plataformas de eSports, onde influenciadores possam competir em simuladores da Fórmula E, ajudará a conectar os amantes de jogos e automobilismo. Isso não só atrai gamers, mas também oferece uma oportunidade para os influenciadores se envolverem com o público de maneira dinâmica e divertida.</p>

        </ul>
      </section>


      <div>
        <h3>LocalStorage</h3>
        <input
          type="text"
          placeholder="Digite o nome do piloto"
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
        />
        <button onClick={salvarNoLocalStorage}>Salvar no LocalStorage</button>

        <h4>Pilotos cadastrados:</h4>
        <ul>
          {valoresSalvos.length > 0 ? (
            valoresSalvos.map((valor, index) => (
              <li key={index}>{valor}</li>
            ))
          ) : (
            <p>Nenhum piloto salvo ainda</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Body;
