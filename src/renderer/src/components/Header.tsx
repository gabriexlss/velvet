import { ReactNode, useState } from 'react'
import { Button } from './ui/button';
import { PlusIcon, FilterIcon, SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupInput, InputGroupAddon } from './ui/input-group'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from './ui/dialog';
import { Input } from './ui/input';
import { Field, FieldDescription, FieldGroup, FieldLabel } from './ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Engines = [
  {
    id: 1,
    engine: 'Renpy'
  },
  {
    id: 2,
    engine: 'RPG Maker'
  },
  {
    id: 3,
    engine: 'Outros/Desconhecido'
  }
]
const Header = (): ReactNode => {
  const [modalAberto, setModalAberto] = useState<boolean>(false)
  const [adicionarJogo, setAdicionarJogo] = useState<boolean>(false)
  const [instalarJogo, setInstalarJogo] = useState<boolean>(false)

  return (
    <header className='mt-2 h-10 mx-auto w-[95%] flex flex-row items-center gap-2'>
      <InputGroup className='w-100 ml-auto rounded'>
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput placeholder='Pesquise seu jogo...' />
      </InputGroup>
      <Button variant='outline' className='rounded hover:cursor-pointer'>
        <FilterIcon />
        <span className='text-sm'>Filtro</span>
      </Button>
      <Button className='bg-red-600 text-accent-foreground rounded hover:bg-red-500 hover:cursor-pointer' onClick={() => setModalAberto(true)}>
        <PlusIcon />
        <span className='text-sm'>Adicionar Jogo</span>
      </Button>

      {
        // dialog perguntando se quer adicionar um jogo já instalado, ou instalar ele por URL ou Zip.
      }
      <Dialog open={modalAberto} onOpenChange={setModalAberto}>
        <DialogContent className='w-auto sm:max-w-none select-none'>
          <DialogHeader>
            <span>Escolha como adicionar seu jogo...</span>
          </DialogHeader>
          <DialogDescription className='flex flex-row gap-4'>
            <div
              onClick={() => {
                setModalAberto(false)
                setInstalarJogo(true)
              }}
              className='h-50 w-75 flex flex-col items-center gap-2 border-dashed border-red-400 border rounded-lg px-4 py-12 hover:border-solid hover:cursor-pointer hover:bg-red-200/10 transition'
            >
              <h1 className='text-lg text-red-400'>Instalar Jogo</h1>
              <span className='text-center'>Adicione um jogo ainda não instalado ou descompactado no seu computador.</span>
            </div>
            <div
              onClick={() => {
                setModalAberto(false)
                setAdicionarJogo(true)
              }}
              className='h-50 w-75 ml-auto flex flex-col items-center gap-2 border-dashed border-blue-400 border rounded-lg px-4 py-12 hover:border-solid hover:cursor-pointer hover:bg-blue-200/10 transition'
            >
              <h1 className='text-lg text-blue-400'>Adicionar Jogo</h1>
              <span className='text-center'>Adicione um jogo já instalado e descompactado no seu computador.</span>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {
        // dialog para um jogo já instalado no pc do usuario
      }
      <Dialog open={adicionarJogo} onOpenChange={setAdicionarJogo}>
        <DialogContent className='w-150 sm:max-w-none select-none'>
          <DialogHeader>
            <span>Adicione seu Jogo</span>
          </DialogHeader>
          <DialogDescription>
            <FieldGroup>

              <Field>
                <FieldLabel><span>Nome</span></FieldLabel>
                <Input placeholder='Digite o nome do jogo.' />
              </Field>

              <Field>
                <FieldLabel><span>Executável</span></FieldLabel>
                <Input placeholder='Clique e selecione o executável do jogo. (.exe)' />
              </Field>

              <Field>
                <FieldLabel><span>Engine</span></FieldLabel>
                <Select disabled={true}>
                  <SelectTrigger>
                    <SelectValue placeholder='Escolha sua Engine...' />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      Engines.map(e => (
                        <SelectItem value={e.id} key={e.id}>{e.engine}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                <FieldDescription>
                  <span>O Sistema tentará detectar a engine automaticamente pelo executável, em caso de falha, você pode seleciona-lá manualmente acima.</span>
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel><span>Pasta de Saves</span></FieldLabel>
                <Input placeholder='Clique e selecione o caminho exato da pasta de saves.' disabled />
                <FieldDescription>
                  <span>O Sistema irá buscar a pasta padrão de saves para aquela engine, se estiver incorreta, selecione manualmente.</span>
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel><span>Versão</span></FieldLabel>
                <Input placeholder='Digite a versão do jogo.' type='number' />
              </Field>

            </FieldGroup>
          </DialogDescription>
          <DialogFooter>
            <Button variant='destructive' onClick={() => setAdicionarJogo(false)}>
              <span>Cancelar</span>
            </Button>
            <Button>
              <span>Adicionar</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {
        // dialog para instalar um jogo por meio de um zip ou url.
      }
      <Dialog open={instalarJogo} onOpenChange={setInstalarJogo}>
        <DialogContent className='w-150 sm:max-w-none select-none'>
          <DialogHeader>
            <span>Instale seu Jogo</span>
          </DialogHeader>
          <DialogDescription className='flex flex-col gap-4 items-center'>
            <div className='h-40 w-75 flex flex-col items-center justify-center gap-2 border-dashed border-red-400 border rounded-lg px-4 py-12 hover:border-solid hover:cursor-pointer hover:bg-red-200/10 transition'>
              <h1 className='text-lg text-red-400'>Jogo Compactado</h1>
              <span className='text-center'>Clique ou Arraste um jogo em ZIP ou RAR</span>
            </div>
            <div className='flex flex-row w-full items-center gap-2'>
              <div className='h-0.5 w-full bg-gray-400/40'></div>
              <span>OU</span>
              <div className='h-0.5 w-full bg-gray-400/40'></div>
            </div>
            <Field>
              <FieldLabel><span>Instalar Jogo via URL</span></FieldLabel>
              <Input placeholder='Digite uma URL que contenha um Jogo.' />
              <FieldDescription>
                <span>Instale um jogo por meio de uma URL que você possua, que automaticamente baixaremos e descompactaremos o jogo.</span>
              </FieldDescription>
            </Field>
          </DialogDescription>
          <DialogFooter>
            <Button variant='destructive' onClick={() => setInstalarJogo(false)}>
              <span>Cancelar</span>
            </Button>
            <Button>
              <span>Instalar</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header