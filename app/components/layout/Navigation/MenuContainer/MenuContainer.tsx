import { FC } from 'react'

import { API_URL } from '@/config/api.config'

import { Menu } from './Menu'
import { GenreMenu } from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'

export const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}
