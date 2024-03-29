import { Menu } from 'lucide-react'
import SideBar from './sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

type Props = {}

const MobileSidebar = (props: Props) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={'ghost'}>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'} className='p-0'>
				<SideBar />
			</SheetContent>
		</Sheet>
	)
}

export default MobileSidebar
