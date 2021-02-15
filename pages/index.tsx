/// <reference lib="dom" />
import styles from './_index.module.css'
import { ReactNode } from 'react'
import { Parallax } from 'react-parallax'
import Image from 'next/image'
import tw from 'twin.macro'
import Viewport from '../components/viewport'
import P from '../components/motion'

const Space = ({ children }: { children?: ReactNode }) => (
  <Parallax
    bgImage="/images/space.webp"
    strength={300}
    style={{ width: '100%', height: '100%' }}
    bgStyle={{ width: '100%', height: '100%' }}
    bgImageStyle={{ width: "100%", height: '100%', objectFit: 'cover' }}
  >
    {children}
  </Parallax>
)

const SpaceNeedleImage = () => (
  <>
    <Image
      src="/images/needle.jpg"
      quality={60}
      layout="fill"
      className="space-needle"
      loading="eager"
      objectFit="cover"
    />
    <style jsx global>{`{
      .space-needle {
        object-fit: cover;
        object-position: left center;
      }
    }`}</style>
  </>
)

const Ufo = () => (
  <div className={styles.ufo}>
    <Image
      src="/images/ufo.png"
      quality={60}
      layout="intrinsic"
      width={800}
      height={800}
      className="ufo"
      loading="eager"
    />
    <style jsx global>{`{
      .ufo {
        margin: auto;
      }
    }`}</style>
  </div>
)

export default function Home() {
  return (
    <>
      <Space>
          <div className={styles.hero}>
            <img src="/images/logo.webp" className={styles.logo} alt="XD Dogs"/>
          </div>
          <div className={styles.heroDivider}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
            </svg>
          </div>
      </Space>
      <div tw="italic" className={styles.intro} style={{padding: '3rem 0', overflow: 'hidden'}}>
        <Viewport
          tw="mt-32 w-full flex justify-center items-end"
          oneWay
          style={{
            ['--animate-time' as any]: '1s',
            ['--animate-y' as any]: '3rem',
            ['--animate-r' as any]: '6deg',
            height: '10vh'
          }}
        >
          <div tw="overflow-hidden">
            <p tw="text-center text-5xl lg:text-6xl text-white font-bold" className="font-title animate">We are...</p>
          </div>
        </Viewport>
        <Viewport
          tw="w-px border border-white mx-auto border-dashed my-6 mt-12"
          className="animate animateOut"
          style={{height: '25vh'}}
          oneWay
          top={200}
        />
        <Viewport
          oneWay
          tw="p-6 w-full lg:w-10/12 flex flex-col lg:flex-row lg:justify-between mx-auto lg:items-end"
          top={200}
          style={{['--animate-time' as any]: '1s'}}>
          <div
            className="animate animateOut"
            tw="w-full h-64 lg:h-80 lg:w-2/3 relative overflow-hidden shadow-xl rounded-br-full rounded-tl-lg rounded-xl bg-gray-800"
            style={{height: '75vh', ['--animate-y' as any]: '3rem'}}
          >
            <SpaceNeedleImage/>
          </div>
          <div
            tw="text-6xl lg:text-8xl font-bold text-white w-full lg:w-1/2 -mt-16 lg:-ml-24 z-20 lg:mt-0 lg:mb-16"
            className="font-title animate"
            style={{transitionDelay: '200ms', ['--animate-y' as any]: '-3rem'}}
          >So<br/> Delicious</div>
        </Viewport>
        <Viewport
          oneWay
          tw="p-6 w-full lg:w-10/12 flex flex-col-reverse lg:flex-row lg:justify-between mx-auto lg:items-center"
          style={{['--animate-time' as any]: '1s'}}
        >
          <div
            tw="text-6xl lg:text-6xl font-bold text-white w-full lg:w-1/2 z-20 lg:mt-0 italic"
            className="font-title animate"
            style={{['--animate-x' as any]: '-3rem'}}
          ><span tw="text-2xl">And we</span><br/>come in<br/><span tw="text-8xl">Peace</span></div>
          <div tw="w-full lg:w-1/2 relative">
            <div tw="flex justify-end">
              <P negative scaleFactor={4}>
                <Ufo/>
              </P>
            </div>
          </div>
        </Viewport>
        <div tw="w-full h-screen"></div>
      </div>
    </>
  )
}
