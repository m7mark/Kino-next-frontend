import Image from 'next/image'
import Link from 'next/link'

import logoImage from '@/assets/images/logo.svg'

export const Logo = () => {
  return (
    <Link href="/">
      <a className="px-layout mb-10 block">
        <Image
          src={logoImage}
          height={47}
          width={247}
          alt="logo image"
          draggable={false}
        />
      </a>
    </Link>
  )
}
