import { toast } from "@renderer/components/ui/toast";

interface MensagemProps {
    titulo: string | null,
    mensagem: string
}
export const Mensagem = {
    sucesso: ({ titulo, mensagem } : MensagemProps) => toast.add({
        type: 'success',
        description: mensagem,
        title: titulo,
    }),
    erro: ({ titulo, mensagem } : MensagemProps) => toast.add({
        type: 'error',
        description: mensagem,
        title: titulo,
    }),
    info: ({ titulo, mensagem } : MensagemProps) => toast.add({
        type: 'info',
        description: mensagem,
        title: titulo,
    }),
    aviso: ({ titulo, mensagem } : MensagemProps) => toast.add({
        type: 'warning',
        description: mensagem,
        title: titulo,
        priority: 'high'
    }),
    padrao: ({ titulo, mensagem } : MensagemProps) => toast.add({
        title: titulo,
        description: mensagem,
    })
}