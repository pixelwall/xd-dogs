import { Parallax } from 'react-parallax'
import { ReactNode } from 'react'
import tw from 'twin.macro'

export const Space = ({ children }: { children?: ReactNode }) => (
  <Parallax
    bgImage="/images/space.webp"
    strength={300}
    style={{ width: '100%', height: '100%', backgroundColor: '#01266A' }}
    bgStyle={{ width: '100%', height: '100%' }}
    bgImageStyle={{ width: "100%", height: '100%', objectFit: 'cover' }}
  >
    {children}
  </Parallax>
)

export const container = tw`px-6 w-full lg:w-10/12 mx-auto`
