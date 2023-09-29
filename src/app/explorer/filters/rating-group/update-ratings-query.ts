export function updateRatingsQuery(currentRatings: string, newRating: string) {
	const ratingsArr = currentRatings ? String(currentRatings).split('|') : []

	const ratingIndex = ratingsArr.indexOf(newRating)

	if (ratingIndex === -1) {
		ratingsArr.push(newRating)
	} else {
		ratingsArr.splice(ratingIndex, 1)
	}

	return ratingsArr.join('|')
}
