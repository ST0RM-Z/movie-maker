import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import MovieEdit from "./MovieEdit";
import AddMovies from "./AddMovies";
import Movie from "./Movie";
import Movies from "../containers/Movies";
const NotFount=()=><h1> Not Available</h1>;

export default function AllRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Movies />} />
    <Route path='/addmovies' element={<AddMovies />} />
    <Route path='*' element={<NotFount />} />
    <Route path='/edit/:_id' element={<MovieEdit />} />
</Routes>
  );
}
