import Image from 'next/image'

const Header = () => {
	return (
		<header className='h-20 w-full border-b-2 border-slate-200 px-4'>
			<div className='max-w-screen-lg mx-auto flex items-center justify-between h-full'>
				<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
					<Image
						src={'/mascot.svg'}
						width={48}
						height={48}
						alt={'Mascot'}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
