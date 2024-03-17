import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {
	activeCourse: { imageSrc: string; title: string }
	hearts: number
	points: number
	hasActiveSubscription: boolean
}

const UserProgress = ({
	activeCourse,
	hasActiveSubscription,
	hearts,
	points
}: Props) => {
	return (
		<div className='flex items-center justify-between gap-x-2 w-full'>
			<Link href={'/courses'}>
				<Button variant={'ghost'}>
					<Image
						src={activeCourse.imageSrc}
						alt={activeCourse.title}
						className='rounded-md border'
						width={32}
						height={32}
					/>
				</Button>
			</Link>
		</div>
	)
}

export default UserProgress
