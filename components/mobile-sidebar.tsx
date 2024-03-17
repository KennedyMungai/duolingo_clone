'use client'

import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { SheetContent, SheetTrigger, Sheet } from './ui/sheet'
import SideBar from './sidebar'

type Props = {}

const MobileSidebar = (props: Props) => {
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SideBar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSidebar
