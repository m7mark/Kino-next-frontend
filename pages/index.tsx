import type { NextPage } from 'next'

import { Home } from '@/components/screens/home/Home'

import styles from '../styles/Home.module.scss'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  )
}

export default HomePage
