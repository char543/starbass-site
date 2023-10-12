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
          <Link href='/' className='hover:text-green-600'>Starbass.</Link>,
          <Link href='https://stream.starbass.co.uk'>Streams.</Link>,
          <Link href='/'>Gallery.</Link>,
          <Link href='/'>Events.</Link>,
          <Link href='https://store.starbass.co.uk'>Merch.</Link>
        ]} />
      </div>
    </Container>
  )
}
