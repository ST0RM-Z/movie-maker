import React, { Component } from 'react'
import Movie from '../components/Movie'
export default class Movies extends Component {
    state={
        movies:[
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx' },
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
                {name:'john wick',genre:'Action',year: 2019 ,image:'https://tinyurl.com/5acdphwx'},
        ]
    }
  render() {
    return (
      <div className='movies'>
{this.state.movies.map((movie,key)=>{
    return <Movie key={key} name={movie.name} genre={movie.genre} year={movie.year} image={movie.image} />
})}
      </div>
    )
  }
}
