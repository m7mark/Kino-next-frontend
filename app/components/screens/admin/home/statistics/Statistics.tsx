import { FC } from 'react'

import styles from '../Admin.module.scss'

import { CountUsers } from './CountUsers'
import { PopularMovie } from './PopularMovie'

export const Statistics: FC = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />
    </div>
  )
}
