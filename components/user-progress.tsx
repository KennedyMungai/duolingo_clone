import React from 'react'

type Props = {
	activeCourse: string
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
	return <div>UserProgress</div>
}

export default UserProgress
