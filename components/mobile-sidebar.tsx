'use client'

import { Menu } from 'lucide-react'
import SideBar from './sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

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
