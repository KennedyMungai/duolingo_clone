import MobileSidebar from './mobile-sidebar'

type Props = {}

const MobileHeader = (props: Props) => {
	return (
		<nav className='lg:hidden px-6 flex items-center bg-yellow-500 border-b fixed top-0 w-full z-50 h-[50px]'>
			<MobileSidebar />
		</nav>
	)
}

export default MobileHeader
