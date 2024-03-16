import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className={'flex flex-col gap-2 max-w-[300px]'}>
			<Button className={'m-5'}>Default</Button>
			<Button className={'m-5'} variant={'primary'}>
				Primary
			</Button>
			<Button className={'m-5'} variant={'primaryOutline'}>
				Primary Outline
			</Button>
			<Button className={'m-5'} variant={'secondary'}>
				Secondary
			</Button>
			<Button className={'m-5'} variant={'secondaryOutline'}>
				Secondary Outline
			</Button>
		</main>
	)
}
