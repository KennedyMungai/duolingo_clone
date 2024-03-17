import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ClerkLayout = ({ children }: Props) => {
	return (
		<div className='min-h-screen flex flex-1 items-center justify-center'>
			{children}
		</div>
	)
}

export default ClerkLayout
