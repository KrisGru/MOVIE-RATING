import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { AiFillHeart } from "react-icons/ai";

const Movie = ({ movie }) => {
	const [showModalClick, setShowModalClick] = useState(false);
	const [showModalID, setShowModalID] = useState("");
	const ratings = movie.Ratings.length;

	const handleClickShowModal = id => {
		setShowModalID(id);
		setShowModalClick(!showModalClick);
	};
	return (
		<>
			<section
				className='movie'
				id={movie.imdbID}
				onClick={() => handleClickShowModal(movie.imdbID)}>
				<img className='movie__image' src={movie.Poster} alt="movie's poster" />
				<h2 className='movie__title'>{movie.Title}</h2>
				<p className='movie__category'>{movie.Genre}</p>
				<p className='movie__rating'>
					<AiFillHeart className='icons' />
					{ratings === 0 ? null : movie.Ratings[0].Value}
				</p>
			</section>
			{showModalID === movie.imdbID && showModalClick ? (
				<Modal movie={movie} handleClickShowModal={handleClickShowModal} />
			) : null}
		</>
	);
};

export default Movie;
