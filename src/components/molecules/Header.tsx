import Title from '../atoms/Title'
import { Button } from '../atoms/button'

export default function Header() {
  return (
    <header className='max-w-5xl mx-auto my-0'>
      <Title headingLevel='h2' className='text-3xl text-white'>
        TO DO | YOUR LIST
      </Title>
      <Button variant='default'></Button>
    </header>
  )
}
