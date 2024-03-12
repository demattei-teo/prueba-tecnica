import { Button, PlusIcon } from '..'
import Title from '../atoms/Title'

export default function Header() {
  return (
    <header className='max-w-5xl items-center flex-wrap flex justify-between p-4  mx-auto my-0'>
      <Title headingLevel='h2' className='text-lg md:text-xl font-bold text-white'>
        TO DO | YOUR LIST
      </Title>
      <Button variant='default'>
        <PlusIcon />
        <span className='hidden md:block'>Add new task</span>
      </Button>
    </header>
  )
}
