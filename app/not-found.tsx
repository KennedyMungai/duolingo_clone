import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='min-h-screen bg-green-400 flex flex-col items-center justify-center gap-10'>
			<div className='flex justify-between gap-5'>
				<Image
					src='/mascot_sad.svg'
					width={48}
					height={48}
					alt={'Mascot'}
				/>
				<p className='text-4xl font-extrabold text-white'>
					Page Not Found
				</p>
			</div>

			<div>
				<Link href='/'>
					<Button variant={'ghost'}>Go Home</Button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
