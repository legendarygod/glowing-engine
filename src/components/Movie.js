import React from 'react';
import { useParams } from 'react-router-dom';
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import BreadCrumb from './Breadcrumb/Index';
import Grid from './Grid/Index';
import { Spinner } from './Spinner/Spinner.styles';
import MovieInfo from './MovieInfo/Index';
import MovieInfoBar from './MovieInfoBar/Index';
import Actor from './Actor/Index';
//Hook
import { useFilmFetch } from '../hooks/useFilmFetch';
//Image
import NoImage from '../images/no_image.jpg'


const Movie = () => {
    const {movieId} = useParams();

    const{ state:movie, loading, error } = useFilmFetch(movieId);
    //console.log(movie);

    if(loading){return <Spinner />}
    if(error){return <div>Something Went wrong</div>}
    return(
        <>
            <BreadCrumb
                movieTitle={movie.original_title}
            />
            <MovieInfo 
                movie={movie}
            />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header='Actors'>
                {movie.actors.map((actor)=>( 
                    <Actor
                            key={actor.credit_id}
                            name={actor.name}
                            character={actor.character}
                            imageUrl={
                                actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                            }
                        />
                    ))}
            </Grid>


        </>
    )
    
}
    


export default Movie;