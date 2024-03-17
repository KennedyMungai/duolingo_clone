import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
	title: string
}

const Header = ({ title }: Props) => {
	return (
		<div className='sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-2 text-neutral-400 lg:z-50'>
			<Link href='/courses'>
				<Button>{title}</Button>
			</Link>
		</div>
	)
}

export default Header