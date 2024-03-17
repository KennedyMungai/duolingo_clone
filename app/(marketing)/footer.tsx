import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
			<div className='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
				<Button
					size={'lg'}
					variant={'ghost'}
					className='w-full flex gap-2'
				>
					<Image
						src='/KE.svg'
						alt='Kiswahili'
						height={32}
						width={40}
					/>
					Kiswahili
				</Button>
			</div>
		</footer>
	)
}

export default Footer
