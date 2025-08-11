import { useState } from "react";
import Lampada from "../assets/Lampada.png";
import styled from "styled-components";
import showdown from "showdown";
import Xis from "../assets/excluir.png";

const apiKey = import.meta.env.VITE_API_KEY;

const perguntarAI = async (question, apiKey) => {
    const model = "gemini-2.0-flash";
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const pergunta = `
## Especialidade
você é um professor que precisa explicar da melhor forma possivel a resposta corrta sobre  ${question}
## Tarefa
Você deve receber a pergunta do usuário, primeiro explicar o que a pergunta significa ou o contexto por trás dela, e então fornecer a resposta mais adequada com base no seu conhecimento. Após dar a resposta, explique também por que essa é a melhor resposta, ou seja, a lógica ou motivos que justificam essa escolha.

## Regras
- Se você não souber a resposta, responda com 'Não sei' e não tente inventar nada.
- Considere a data atual ${new Date().toLocaleDateString()}.
- Faça pesquisas atualizadas sobre o ${question}  para garantir que a resposta esteja coerente com a atualidade.
- Nunca responda itens que você não tenha certeza da resposta e explicação.

## Resposta
- Seja direto e objetivo, usando no máximo 600 caracteres.
- Responda em markdown.
- Não faça saudações ou despedidas, responda apenas o conteúdo que o usuário está buscando.
- A resposta deve conter:
  1. Uma breve explicação do que a pergunta quer dizer ou o contexto.
  2. A resposta direta para a pergunta.
  3. Uma explicação do porquê dessa resposta ser a melhor opção.

## Exemplo de resposta
pergunta do usuário: O que é JSX?

resposta:

A pergunta busca saber o que é JSX, que é uma extensão de linguagem do JavaScript.

A melhor resposta é:  

---
Aqui está a pergunta do usuário: ${question}
`;

    const contents = [{ role: "user", parts: [{ text: pergunta }] }];
    const tools = [{ google_search: {} }];

    const response = await fetch(geminiURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents, tools })
    });

    const data = await response.json();
    if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error("Resposta inválida da API");
    }
    return data.candidates[0].content.parts[0].text;
};

export default function Tirarduvidas({ pergunta }) {
    const [mostrarOverlay, setMostrarOverlay] = useState(false);
    const [respostaIA, setRespostaIA] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleClick() {
        setMostrarOverlay(true);
        setLoading(true);
        try {
            const resposta = await perguntarAI(pergunta, apiKey);
            setRespostaIA(resposta);
        } catch {
            setRespostaIA("Erro ao buscar resposta da IA.");
        } finally {
            setLoading(false);
        }
    }

    function fecharOverlay() {
        setMostrarOverlay(false);
        setRespostaIA("");
    }

    return (
        <>
            <img
                onClick={handleClick}
                src={Lampada}
                alt="Tirar dúvida"
                style={{ cursor: "pointer" }}
            />

            {mostrarOverlay && (
                <Overlay onClick={fecharOverlay}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        {loading ? (
                            <Loading>Carregando resposta...</Loading>
                        ) : (
                            <RespostaContainer
                                dangerouslySetInnerHTML={{ __html: markdownToHTML(respostaIA) }}
                            />
                        )}

                        <CloseButton onClick={fecharOverlay} aria-label="Fechar">
                            <img src={Xis} alt="Fechar" />
                        </CloseButton>
                    </ModalContent>
                </Overlay>
            )}
        </>
    );
}

const converter = new showdown.Converter({ simpleLineBreaks: true });
const markdownToHTML = (text) => converter.makeHtml(text);

/* ===== styles ===== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;              /* necessário para posicionar o botão fechar */
  background: white;
  padding: 2rem 2.5rem;
  border-radius: 0.75rem;
  width: 70%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(145, 71, 255, 0.6);
  box-sizing: border-box;
  text-align: left;
  display: block;
  margin: 0 auto;
`;

const RespostaContainer = styled.div`
  width: 100%;
  font-size: 1rem;
  color: #222;
  line-height: 1.6;

  /* anula qualquer layout em colunas ou flex herdado */
  display: block !important;
  columns: auto !important;
  column-count: 1 !important;
  column-gap: 0 !important;

  /* cada filho vira bloco de largura total */
  & > * {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
    clear: both !important;
    white-space: normal !important;
  }

  /* espaçamento “texto corrido” */
  p, li, blockquote, pre { margin: 0 0 1rem 0; }
  ul, ol { margin: 0 0 1rem 1.25rem; padding: 0; }
  h1, h2, h3, h4, h5, h6 { margin: 0 0 .75rem 0; line-height: 1.25; }
`;

const Loading = styled.div
    `font-size: 1.25rem;
    color: #9147ff;
    font-weight: 600;
    `
    ;

const CloseButton = styled.button`
  position: absolute;
  top: .75rem;
  right: .75rem;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  img { width: 1.25rem; height: 1.25rem; display: block; }
`;
