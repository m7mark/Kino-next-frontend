import { link } from 'fs'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import { MenuItem } from '../MenuItem'

import { LogoutButton } from './LogoutButton'

//TODO with ssr this component throw error

const AuthItems: FC = () => {
  const { user } = useAuth()
  return (
    <>
      {user ? (
        <>
          <MenuItem
            item={{ title: 'Profile', icon: 'MdSettings', link: '/profile' }}
          />
          <LogoutButton />
        </>
      ) : (
        <MenuItem item={{ title: 'Login', icon: 'MdLogin', link: '/auth' }} />
      )}
      {user?.isAdmin && (
        <MenuItem
          item={{
            title: 'Admin',
            icon: 'MdOutlineLock',
            link: getAdminHomeUrl(),
          }}
        />
      )}
    </>
  )
}

export default AuthItems
