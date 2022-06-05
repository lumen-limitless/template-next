import { Icon } from '@iconify/react'
import FadeIn from '../../animations/FadeIn'
import Button from '../Button'
import Container from '../Container'
import Section from '../Section'
export default function Hero() {
  return (
    <Section id="hero" fullscreen className="bg-[url('/bg.webp')]  bg-cover bg-center bg-no-repeat">
      <Container maxWidth="full">
        <div className="my-36 flex flex-col">
          {' '}
          <FadeIn className="w-full">
            <div className=" my-12 flex flex-col  gap-1 text-center">
              <div className="grid grid-cols-2 grid-rows-2"></div>
              <h1 className="text-[72px] font-bold  text-white drop-shadow-2xl md:text-[112px] lg:text-[144px]">
                Paws Down the Best for your Pet
              </h1>
            </div>
          </FadeIn>
          <FadeIn className="mx-auto w-full max-w-3xl" delay={0.66}>
            {' '}
            <div className="flex w-full max-w-5xl justify-evenly gap-3 py-6">
              {' '}
              <a className="w-full" href="#services">
                <Button color="gradient" icon={<Icon icon="map:pet-store" inline />}>
                  Services
                </Button>
              </a>
              <a href="#CTA" className="w-full">
                <Button color="gradient" icon={<Icon icon="bxs:contact" inline />}>
                  Contact
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
