import { ReactNode } from 'react'
import { Button } from './ui/button';
import { PlusIcon, FilterIcon, SearchIcon } from 'lucide-react'
import { InputGroup, InputGroupInput, InputGroupAddon } from './ui/input-group'

const Header = (): ReactNode => {
  return (
    <header className='mt-2 h-10 mx-auto w-[95%] flex flex-row items-center gap-2'>
      <InputGroup className='w-100 ml-auto rounded'>
        <InputGroupAddon><SearchIcon /></InputGroupAddon>
        <InputGroupInput placeholder='Pesquise seu jogo...'/>
      </InputGroup>
      <Button variant='outline' className='rounded hover:cursor-pointer'>
        <FilterIcon />
        <span>Filtro</span>
      </Button>
      <Button className='bg-red-600 text-accent-foreground rounded hover:bg-red-500 hover:cursor-pointer'>
        <PlusIcon />
        <span>Adicionar Jogo</span>
      </Button>
    </header>
  )
}

export default Header