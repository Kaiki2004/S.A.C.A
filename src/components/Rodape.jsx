import { Num_questoes } from "../style/style.js";

export default function ContadorConcluidos({ atual, total }) {
    return (
        <Num_questoes>
            <p>{atual}/{total} CONCLUÍDOS</p>
        </Num_questoes>
    );
}
