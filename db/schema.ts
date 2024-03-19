import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const courses = pgTable('courses', {
	id: uuid('id').defaultRandom().primaryKey(),
	title: text('title').notNull(),
	imageSrc: text('image_src').notNull()
})

export const userProgress = pgTable('user_progress', {
	userId: text('user_id').primaryKey(),
	userName: text('user_name').notNull().default('User'),
	userImageSrc: text('user_image_src').notNull().default('/mascot.svg'),
	activeCourseId: uuid('active_course_id').references(() => courses.id, {
		onDelete: 'cascade'
	}),
	hearts: integer('hearts').notNull().default(5),
	points: integer('points').notNull().default(0)
})
