import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import SidebarItem from './sidebar-item'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

type Props = {
	className?: string
}

const SideBar = ({ className }: Props) => {
	return (
		<aside
			className={cn(
				'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
				className
			)}
		>
			<Link href='/learn'>
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
			</Link>
			<div className='flex flex-col gap-y-2 flex-1'>
				<SidebarItem
					label={'Learn'}
					iconSrc={'/learn.svg'}
					href={'/learn'}
				/>
				<SidebarItem
					label={'Leader Boards'}
					iconSrc={'/leaderboard.svg'}
					href={'/leaderboards'}
				/>
				<SidebarItem
					label={'Quests'}
					iconSrc={'/quests.svg'}
					href={'/quests'}
				/>
				<SidebarItem
					label={'Shop'}
					iconSrc={'/shop.svg'}
					href={'/shop'}
				/>
			</div>
			<div className='p-4'>
				<ClerkLoading>
					<Loader className='w-5 h-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton afterSignOutUrl='/' />
				</ClerkLoaded>
			</div>
		</aside>
	)
}

export default SideBar
