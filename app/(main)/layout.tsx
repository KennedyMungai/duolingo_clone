import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MainLayoutPage = ({ children }: Props) => {
	return <main className='min-h-screen'>{children}</main>
}

export default MainLayoutPage
