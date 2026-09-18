import CardJogos from '@renderer/components/CardJogos';
import Janela from '@renderer/components/Janela';
import { ReactNode } from 'react'

interface Badges {
    badge: string,
    tipo: string
}
interface CardJogosProps {
    nome: string,
    tempoJogoSegundos: number,
    tags: Badges[],
    imagem: string
}
const JogosMockup: CardJogosProps[] = [
    {
        nome: "Cyberpunk 2077",
        tempoJogoSegundos: 45230,
        tags: [
            { badge: "RPG", tipo: "#C084FC" },
            { badge: "Ação", tipo: "#F87171" }
        ],
        imagem: "https://picsum.photos/500?random=1"
    },
    {
        nome: "Elden Ring",
        tempoJogoSegundos: 128400,
        tags: [
            { badge: "Soulslike", tipo: "#FB7185" },
            { badge: "RPG", tipo: "#C084FC" },
            { badge: "Mundo Aberto", tipo: "#60A5FA" }
        ],
        imagem: "https://picsum.photos/500?random=2"
    },
    {
        nome: "Stardew Valley",
        tempoJogoSegundos: 86400,
        tags: [
            { badge: "Casual", tipo: "#86EFAC" },
            { badge: "Simulação", tipo: "#67E8F9" }
        ],
        imagem: "https://picsum.photos/500?random=3"
    },
    {
        nome: "Hollow Knight",
        tempoJogoSegundos: 25380,
        tags: [
            { badge: "Metroidvania", tipo: "#93C5FD" },
            { badge: "Indie", tipo: "#FDE68A" }
        ],
        imagem: "https://picsum.photos/500?random=4"
    },
    {
        nome: "Persona 5 Royal",
        tempoJogoSegundos: 210600,
        tags: [
            { badge: "JRPG", tipo: "#FCA5A5" },
            { badge: "História", tipo: "#F9A8D4" }
        ],
        imagem: "https://picsum.photos/500?random=5"
    },
    {
        nome: "Doki Doki Literature Club",
        tempoJogoSegundos: 18420,
        tags: [
            { badge: "Visual Novel", tipo: "#F9A8D4" },
            { badge: "Terror", tipo: "#FDA4AF" }
        ],
        imagem: "https://picsum.photos/500?random=6"
    }
]
const Jogos = (): ReactNode => {
    return (
        <Janela >
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 px-4 pb-4 w-full">
                {
                    JogosMockup.map((jogos, index) => <CardJogos key={index} nome={jogos.nome} tempoJogoSegundos={jogos.tempoJogoSegundos} tags={jogos.tags} imagem={jogos.imagem} />)
                }
            </div>

        </Janela>
    )
}

export default Jogos