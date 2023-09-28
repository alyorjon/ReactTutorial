import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'
import React from 'react'
const MovieList = () => {
	return (
		<div className='movie-list list-group'>
			<MovieListItem />
			<MovieListItem />
			<MovieListItem />
		</div>
	)
}

export default MovieList
