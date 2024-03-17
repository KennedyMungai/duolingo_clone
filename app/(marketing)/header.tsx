import { Button } from '@/components/ui/button'
import {
	ClerkLoaded,
	ClerkLoading,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
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
					<h1 className='text-2xl font-extrabold tracking-wide text-green-600'>
						Lingo
					</h1>
				</div>
				<ClerkLoading>
					<Loader className='h-5 w-5 text-muted-foreground animate-spin' />
				</ClerkLoading>
				<ClerkLoaded>
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton
							mode='modal'
							afterSignInUrl='/learn'
							afterSignUpUrl='/learn'
						>
							<Button variant={'ghost'}>Login</Button>
						</SignInButton>
					</SignedOut>
				</ClerkLoaded>
			</div>
		</header>
	)
}

export default Header
