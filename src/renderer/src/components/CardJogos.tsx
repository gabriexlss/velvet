import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface Badges{
    badge: string,
    tipo: string
}
interface CardJogosProps{
    nome: string,
    tempoJogoSegundos: number,
    tags: Badges[],
    imagem: string
}

const CardJogos = ({ nome, tempoJogoSegundos, tags, imagem }: CardJogosProps): ReactNode => {
    const minutos = Math.floor((tempoJogoSegundos / 60) % 60)
    const horas = Math.floor(tempoJogoSegundos / 60 / 60)
    return (
        <Card className="p-0 gap-0 rounded w-62.5 hover:scale-103 transition-transform cursor-pointer">
            <CardHeader className="p-0 w-62.5 h-62.5">
                <AspectRatio ratio={1 / 1}>
                    <img src={imagem} alt="" className="w-full h-full object-cover" draggable={false}/>
                </AspectRatio>
            </CardHeader>
            <CardContent className="px-2 pt-4 pb">
                <h2 className="wrap-break-word text-primary">{nome}</h2>
                <Separator orientation="horizontal" className='border my-2 rounded'/>
                <span className="text-gray-400">Tempo de Jogo: {horas}h {minutos}m</span>
            </CardContent>
            <CardFooter className="border-0 bg-transparent flex flex-row gap-x-3 gap-y-1 flex-wrap truncate">
                {
                    tags.map((b, index) => <Badge key={index} className={`rounded max-w-55 truncate line-clamp-1`} style={{ backgroundColor: b.tipo }}>{b.badge}</Badge>)
                }
            </CardFooter>
        </Card>
    )
}

export default CardJogos