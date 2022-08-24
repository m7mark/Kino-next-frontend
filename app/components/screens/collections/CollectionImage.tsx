import Image from 'next/image'
import { FC } from 'react'

import defaultGenreImage from './../../../assets/images/logo.svg'
import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
  collection: { image, title },
}) => {
  return (
    <Image
      alt={title}
      src={image ? image : defaultGenreImage}
      layout="fill"
      draggable={false}
    />
  )
}

export default CollectionImage
