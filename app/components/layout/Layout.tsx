import { FC, ReactNode, useEffect, useRef } from 'react'

import styles from './Layout.module.scss'
import { Navigation } from './Navigation/Navigation'
import { Sidebar } from './Sidebar/Sidebar'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollTo(0, 0)
  }, [children])

  return (
    <>
      <div className={styles.layout}>
        <Navigation />
        <div ref={ref} className={styles.center}>
          {children}
        </div>
        <Sidebar />
      </div>
    </>
  )
}
