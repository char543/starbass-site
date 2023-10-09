import BigText from 'components/BigText'
import Container from 'components/Container'
import Link from 'next/link'
import ParticlesComponent from 'components/Particles'

export default function Home() {
  return (
    <Container>
      <ParticlesComponent />
      <div className='flex flex-col items-between inset-0 z-50'>
      <BigText slides={[
          <Link href='/a' className='hover:text-green-600'>Starbass.</Link>,
          <Link href='/'>Streams.</Link>,
          <Link href='/'>Gallery.</Link>,
          <Link href='/'>Events.</Link>,
          <Link href='/'>Merch.</Link>
        ]} />
      </div>
    </Container>
  )
}
