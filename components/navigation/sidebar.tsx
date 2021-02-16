/// <reference lib="dom" />
import type { RefObject, CSSProperties } from 'react'
import { useRef, useEffect } from 'react'
import links from './navigation'
import Link from 'next/link'

const ParentLink = ({idx, title, href, childrens}: {
  idx: number,
  title: string,
  href?: string,
  childrens?: any[],
}) => {
  const css: CSSProperties = { transitionDelay: `${idx * 200}ms`, fontStyle: 'italic', paddingRight: '0.5rem' }
  if (childrens) {
    return (
      <div className="header__sidebar-link">
        <p className="t-h1" style={css}>{title}</p>
      </div>
    )
  } else {
    return (
      <Link href={href}>
        <a className="header__sidebar-link">
          <p className="t-h1" style={css}>{title}</p>
        </a>
      </Link>
    )
  }
}

const Parents = () => (
  <div>
    {links.map((l, idx) => (<ParentLink title={l.titulo} key={idx} idx={idx} href={l.href}/>))}
  </div>
)

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: CallableFunction) => {
  const handleClick = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default function Sidebar({ open = false, toggle }: { open: boolean, toggle: () => void }) {
  const sidebarRef: RefObject<HTMLElement> = useRef(null)

  useOutsideClick(sidebarRef, () => {
    if (open) {
      toggle()
    }
  })

  return (
    <aside className={`header__sidebar ${open ? 'open' : ''}`} ref={sidebarRef}>
      <div className="header__sidebar-wrapper">
        <Parents/>
      </div>
    </aside>
  )
}
