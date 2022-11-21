import React from 'react'
import Movie from '../components/Movie'
import { useQuery, gql } from '@apollo/client';
// import { graphql } from 'graphql';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';


const allMovies = gql`
{
  movies{
    name,
    genre,
    year,
    image
  }
}
`
 function Movies () {
 
 
    
    const { loading, error, data } = useQuery(allMovies);
  // console.log(data);
    if (loading) return <p>Loading...</p>;

    if (error)
    {

      // console.log(error);
      return <p>Error :(</p>;
    }
  
  
    return (
      <div className='movies'>
      <Row>
{data.movies.map((movie,key)=>{
    return<Movie key={key} name={movie.name} genre={movie.genre} year={movie.year} image={movie.image} />
})}
</Row>
      </div>
    )
  
}

export default Movies;
