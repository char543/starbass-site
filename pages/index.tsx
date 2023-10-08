import BigText from 'components/BigText'
import Container from 'components/Container'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-between justify-between inset-0'>
      <BigText slides={[
          <Link href='/a'>Starbass.</Link>,
          <Link href='/'>Streams.</Link>,
          <Link href='/'>Gallery.</Link>,
          <Link href='/'>Events.</Link>,
          <Link href='/'>Merch.</Link>
        ]} />
      </div>
    </Container>
  )
}
