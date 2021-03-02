import styles from './_index.module.css'
import Image from 'next/image'
import tw from 'twin.macro'
import Viewport from '../components/viewport'
import P from '../components/motion'
import { Space, container } from '../components/utils'
import Link from 'next/link'

const SpaceNeedleImage = () => (
  <>
    <Image
      src="/images/needle.jpg"
      alt="Space Needle"
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
      src={`/images/burger.png`}
      alt="UFO"
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

const Hotdog = () => (
  <>
    <Image
      src={`/images/hotdog.png`}
      alt="Hot Dog"
      quality={60}
      layout="intrinsic"
      width={649}
      height={649}
      className="ufo"
      loading="eager"
    />
    <style jsx global>{`{
      .ufo {
        margin: auto;
      }
    }`}</style>
  </>
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
      <div tw="italic" className={styles.intro} style={{paddingTop: '3rem', overflow: 'hidden'}}>
        <Viewport
          tw="my-32 w-full flex justify-center items-end"
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
        {
        //<Viewport
        //  tw="w-px border border-white mx-auto border-dashed my-6 mt-12"
        //  className="animate animateOut"
        //  style={{height: '25vh'}}
        //  oneWay
        //  top={200}
        //>
        }
        <Viewport
          oneWay
          tw="p-6 flex flex-col lg:flex-row lg:justify-between lg:items-end"
          css={container}
          top={200}
          style={{['--animate-time' as any]: '1s'}}>
          <div
            className="animate animateOut"
            tw="w-full h-64 lg:h-80 lg:w-2/3 relative overflow-hidden shadow-xl rounded-br-full rounded-tl-lg rounded-xl bg-gray-800"
            style={{height: '75vh', ['--animate-x' as any]: '-3rem'}}
          >
            <SpaceNeedleImage/>
          </div>
          <div
            tw="text-6xl lg:text-8xl font-bold text-white w-full sm:w-1/2 -mt-16 lg:-ml-24 z-20 lg:mt-0 lg:mb-16"
            className="font-title animate"
            style={{transitionDelay: '200ms', ['--animate-y' as any]: '-3rem'}}
          >So<br/> Delicious</div>
        </Viewport>
        <Viewport
          oneWay
          tw="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center"
          css={container}
          style={{['--animate-time' as any]: '1s'}}
        >
          <div
            tw="text-6xl lg:text-6xl font-bold text-white w-full sm:w-1/2 z-20 sm:mt-0 italic"
            className="font-title animate"
            style={{['--animate-x' as any]: '-3rem'}}
          ><span tw="text-2xl">And your stomach</span><br/>will<br/><span tw="text-7xl">Thank you!</span></div>
          <div tw="w-full sm:w-1/2 relative">
            <div tw="flex justify-end">
              <P negative scaleFactor={4}>
                <Ufo/>
              </P>
            </div>
          </div>
        </Viewport>

        <div tw="w-full relative py-16">
          <div tw="w-full absolute h-full bg-gradient-to-b from-transparent to-pink-800 opacity-25">
          </div>
          <Viewport
            oneWay
            tw="flex flex-col-reverse sm:flex-row-reverse sm:justify-between sm:items-center"
            css={container}
            style={{['--animate-time' as any]: '1s'}}
          >
            <div
              tw="text-6xl lg:text-6xl font-bold text-white w-full sm:w-auto z-20 sm:mt-0 italic flex flex-col text-right"
              className="font-title animate"
              style={{['--animate-x' as any]: '3rem'}}
            >
              <span tw="text-2xl pr-6">If you're hungry</span>
              <span css={tw`pr-6 text-transparent bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x bg-clip-text transform hover:scale-95 duration-200`}>
                <Link href="/locations">
                  <a>FIND US HERE</a>
                </Link>
              </span>
            </div>
            <div tw="w-full sm:w-1/2 relative" className="animate" style={{['--animate-x' as any]: '-3rem', transitionDelay: '400ms'}}>
              <div tw="flex justify-end">
                <img src="/images/truck.svg" alt="" tw="w-full sm:pr-16"/>
              </div>
            </div>
          </Viewport>
          <Viewport
            oneWay
            tw="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center"
            css={container}
            style={{['--animate-time' as any]: '1s'}}
          >
            <div
              tw="text-6xl lg:text-6xl font-bold text-white w-full sm:w-auto z-20 sm:mt-0 italic flex flex-col"
              className="font-title animate"
              style={{['--animate-x' as any]: '-3rem'}}
            >
              <span tw="text-2xl">But if you can't wait</span>
              <span css={tw`pr-6 text-transparent bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x bg-clip-text transform hover:scale-95 duration-200`}>
                <Link href="/menu">
                  <a>ORDER NOW</a>
                </Link>
              </span>
            </div>
            <div tw="w-full sm:w-1/2 relative" className="animate" style={{['--animate-x' as any]: '3rem', transitionDelay: '400ms'}}>
              <div tw="flex justify-end sm:pl-16">
                <Hotdog/>
              </div>
            </div>
          </Viewport>

          <Viewport
            oneWay
            tw="w-full sm:justify-between sm:items-center mt-24"
            css={container}
            style={{['--animate-time' as any]: '1s'}}
          >
            <div
              tw="text-2xl lg:text-5xl font-bold text-white w-full sm:w-auto z-20 sm:mt-0 italic flex flex-col text-center"
              className="font-title animate"
              style={{['--animate-y' as any]: '2rem'}}
            >
              <span tw="text-2xl text-center">If you want to see us</span>
              <span css={tw`py-2 text-transparent bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x bg-clip-text transform hover:scale-95 duration-200`}>
                <a href="tel:+14253269856">CALL US<br/>(+1 4253269856)</a>
              </span>
              <span tw="text-2xl text-center">or</span>
              <span css={tw`py-2 text-transparent bg-gradient-to-r from-blue-200 to-pink-500 via-purple-400 animate-gradient-x bg-clip-text transform hover:scale-95 duration-200`}>
                <a href="mailto:xddogs21@gmail.com">MAIL US<br/>(xddogs21@gmail.com)</a>
              </span>
            </div>
          </Viewport>
        </div>
      </div>
    </>
  )
}
