import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return <div className='min-h-screen flex flex-col'>{children}</div>
}

export default MarketingLayout
