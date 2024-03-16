import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<main className={'flex flex-col gap-2 max-w-[300px]'}>
			<Button>Default</Button>
			<Button variant={'primary'}>Primary</Button>
			<Button variant={'primaryOutline'}>Primary Outline</Button>
			<Button variant={'secondary'}>Secondary</Button>
			<Button variant={'secondaryOutline'}>Secondary Outline</Button>
			<Button variant={'danger'}>Danger</Button>
			<Button variant={'dangerOutline'}>Danger Outline</Button>
		</main>
	)
}
