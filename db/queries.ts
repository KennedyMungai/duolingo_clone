import { cache } from 'react'
import { db } from './drizzle'

export const getCourses = cache(async () => {
	const courses: Course[] = await db.query.courses.findMany()

	console.log(JSON.stringify(courses))

	return courses
})
