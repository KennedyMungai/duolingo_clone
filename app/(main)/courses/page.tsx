import { getCourses } from '@/db/queries'

const Courses = async () => {
	const courses = await getCourses()

	return (
		<div className='h-full max-w-[912px] px-3 mx-auto'>
			<h1 className='text-2xl font-bold text-neutral-700'>
				Language Courses
			</h1>
			<List courses={courses} activeCourseId={courses[0].id} />
		</div>
	)
}

export default Courses