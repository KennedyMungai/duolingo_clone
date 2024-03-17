import { cn } from '@/lib/utils'
import Image from 'next/image'

type Props = {
	className?: string
}

const SideBar = ({ className }: Props) => {
	return (
		<aside
			className={cn(
				'flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
				className
			)}
		>
			<div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
				<Image
					src={'/mascot.svg'}
					width={48}
					height={48}
					alt={'Mascot'}
				/>
				<h1 className='text-2xl font-extrabold tracking-wide text-green-600'>
					Lingo
				</h1>
			</div>
		</aside>
	)
}

export default SideBar
