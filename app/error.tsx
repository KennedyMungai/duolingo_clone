import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const ErrorPage = () => {
	return (
		<div className='min-h-screen bg-red-500 flex flex-col items-center justify-center gap-10'>
			<div className='flex justify-between gap-5'>
				<Image
					src='/mascot_sad.svg'
					width={48}
					height={48}
					alt={'Mascot'}
				/>
				<p className='text-4xl font-extrabold text-white'>
					Something went wrong
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

export default ErrorPage
