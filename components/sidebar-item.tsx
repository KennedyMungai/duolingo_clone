'use client'

import { Button } from './ui/button'

type Props = {
	label: string
	iconSrc: string
	href: string
}

const SidebarItem = ({ href, iconSrc, label }: Props) => {
	return <Button>{label}</Button>
}

export default SidebarItem
