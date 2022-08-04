import { FC } from 'react'

import { Button } from '@/ui/field-elements/Button'

import styles from './AdminCreateButton.module.scss'

export const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return <Button onClick={onClick}>Create new</Button>
}
