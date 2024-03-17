import SideBar from '@/components/sidebar'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MainLayoutPage = ({ children }: Props) => {
	return (
		<>
			<SideBar />
			<main className='pl-[256px] h-full'>
				<div className='bg-red-500 h-full'>{children}</div>
			</main>
		</>
	)
}

export default MainLayoutPage
