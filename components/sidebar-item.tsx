'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
	label: string
	iconSrc: string
	href: string
}

const SidebarItem = ({ href, iconSrc, label }: Props) => {
	const pathName = usePathname()

	const isActive = pathName === href

	return (
		<Button
			variant={isActive ? 'sidebarOutline' : 'sidebar'}
			className='justify-start h-[52px]'
			asChild
		>
			<Link href={href}>
				<Image
					src={iconSrc}
					alt={label}
					width={32}
					height={32}
					className='mr-5'
				/>
				{label}
			</Link>
		</Button>
	)
}

export default SidebarItem
