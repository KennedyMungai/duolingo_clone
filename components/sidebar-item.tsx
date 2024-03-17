'use client'

import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'

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
			<Link href={href}>{label}</Link>
		</Button>
	)
}

export default SidebarItem
