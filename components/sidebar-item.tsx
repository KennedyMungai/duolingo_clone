'use client'

import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
	label: string
	iconSrc: string
	href: string
}

const SidebarItem = ({ href, iconSrc, label }: Props) => {
	const pathName = usePathname()

	return <Button>{label}</Button>
}

export default SidebarItem
