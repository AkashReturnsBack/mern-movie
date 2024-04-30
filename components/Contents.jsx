'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import WordBreak from './WordBreak';
import { getMovies } from '../app/utils/getMovies';
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import FilterGenres from './FilterGenres';
import MoviesList from './MoviesList';
import { useRouter } from 'next/navigation';

const Contents = () => {

    const Router = useRouter();

    const [movies, setMovies] = useState([
        {
            "rank": 1,
            "title": "The Shawshank Redemption",
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "9.3",
            "id": "top1",
            "year": 1994,
            "imdbid": "tt0111161",
            "imdb_link": "https://www.imdb.com/title/tt0111161"
        },
        {
            "rank": 2,
            "title": "The Godfather",
            "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
            "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
            "rating": "9.2",
            "id": "top2",
            "year": 1972,
            "imdbid": "tt0068646",
            "imdb_link": "https://www.imdb.com/title/tt0068646"
        },
        {
            "rank": 3,
            "title": "The Dark Knight",
            "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "rating": "9.0",
            "id": "top3",
            "year": 2008,
            "imdbid": "tt0468569",
            "imdb_link": "https://www.imdb.com/title/tt0468569"
        },
        {
            "rank": 4,
            "title": "The Godfather Part II",
            "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top4",
            "year": 1974,
            "imdbid": "tt0071562",
            "imdb_link": "https://www.imdb.com/title/tt0071562"
        },
        {
            "rank": 5,
            "title": "12 Angry Men",
            "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
            "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top5",
            "year": 1957,
            "imdbid": "tt0050083",
            "imdb_link": "https://www.imdb.com/title/tt0050083"
        },
        {
            "rank": 6,
            "title": "Schindler's List",
            "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Biography",
                "Drama",
                "History"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top6",
            "year": 1993,
            "imdbid": "tt0108052",
            "imdb_link": "https://www.imdb.com/title/tt0108052"
        },
        {
            "rank": 7,
            "title": "The Lord of the Rings: The Return of the King",
            "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top7",
            "year": 2003,
            "imdbid": "tt0167260",
            "imdb_link": "https://www.imdb.com/title/tt0167260"
        },
        {
            "rank": 8,
            "title": "Pulp Fiction",
            "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.9",
            "id": "top8",
            "year": 1994,
            "imdbid": "tt0110912",
            "imdb_link": "https://www.imdb.com/title/tt0110912"
        },
        {
            "rank": 9,
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top9",
            "year": 2001,
            "imdbid": "tt0120737",
            "imdb_link": "https://www.imdb.com/title/tt0120737"
        },
        {
            "rank": 10,
            "title": "The Good, the Bad and the Ugly",
            "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Adventure",
                "Western"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top10",
            "year": 1966,
            "imdbid": "tt0060196",
            "imdb_link": "https://www.imdb.com/title/tt0060196"
        },
        {
            "rank": 11,
            "title": "Forrest Gump",
            "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "genre": [
                "Drama",
                "Romance"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top11",
            "year": 1994,
            "imdbid": "tt0109830",
            "imdb_link": "https://www.imdb.com/title/tt0109830"
        },
        {
            "rank": 12,
            "title": "Fight Club",
            "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top12",
            "year": 1999,
            "imdbid": "tt0137523",
            "imdb_link": "https://www.imdb.com/title/tt0137523"
        },
        {
            "rank": 13,
            "title": "The Lord of the Rings: The Two Towers",
            "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top13",
            "year": 2002,
            "imdbid": "tt0167261",
            "imdb_link": "https://www.imdb.com/title/tt0167261"
        },
        {
            "rank": 14,
            "title": "Inception",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top14",
            "year": 2010,
            "imdbid": "tt1375666",
            "imdb_link": "https://www.imdb.com/title/tt1375666"
        },
        {
            "rank": 15,
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
            "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top15",
            "year": 1980,
            "imdbid": "tt0080684",
            "imdb_link": "https://www.imdb.com/title/tt0080684"
        },
        {
            "rank": 16,
            "title": "The Matrix",
            "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Action",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top16",
            "year": 1999,
            "imdbid": "tt0133093",
            "imdb_link": "https://www.imdb.com/title/tt0133093"
        },
        {
            "rank": 17,
            "title": "Goodfellas",
            "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
            "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
            "genre": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top17",
            "year": 1990,
            "imdbid": "tt0099685",
            "imdb_link": "https://www.imdb.com/title/tt0099685"
        },
        {
            "rank": 18,
            "title": "Spider-Man: Across the Spider-Verse",
            "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
            "image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Animation",
                "Action",
                "Adventure"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top18",
            "year": 2023,
            "imdbid": "tt9362722",
            "imdb_link": "https://www.imdb.com/title/tt9362722"
        },
        {
            "rank": 19,
            "title": "Interstellar",
            "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Adventure",
                "Drama",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top19",
            "year": 2014,
            "imdbid": "tt0816692",
            "imdb_link": "https://www.imdb.com/title/tt0816692"
        },
        {
            "rank": 20,
            "title": "One Flew Over the Cuckoo's Nest",
            "description": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
            "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.6",
            "id": "top20",
            "year": 1975,
            "imdbid": "tt0073486",
            "imdb_link": "https://www.imdb.com/title/tt0073486"
        }]);

    const [webShows, setWebShows] = useState([
        {
            "rank": 1,
            "title": "The Shawshank Redemption",
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "9.3",
            "id": "top1",
            "year": 1994,
            "imdbid": "tt0111161",
            "imdb_link": "https://www.imdb.com/title/tt0111161"
        },
        {
            "rank": 2,
            "title": "The Godfather",
            "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
            "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
            "rating": "9.2",
            "id": "top2",
            "year": 1972,
            "imdbid": "tt0068646",
            "imdb_link": "https://www.imdb.com/title/tt0068646"
        },
        {
            "rank": 3,
            "title": "The Dark Knight",
            "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
            "rating": "9.0",
            "id": "top3",
            "year": 2008,
            "imdbid": "tt0468569",
            "imdb_link": "https://www.imdb.com/title/tt0468569"
        },
        {
            "rank": 4,
            "title": "The Godfather Part II",
            "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
            "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top4",
            "year": 1974,
            "imdbid": "tt0071562",
            "imdb_link": "https://www.imdb.com/title/tt0071562"
        },
        {
            "rank": 5,
            "title": "12 Angry Men",
            "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
            "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top5",
            "year": 1957,
            "imdbid": "tt0050083",
            "imdb_link": "https://www.imdb.com/title/tt0050083"
        },
        {
            "rank": 6,
            "title": "Schindler's List",
            "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Biography",
                "Drama",
                "History"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top6",
            "year": 1993,
            "imdbid": "tt0108052",
            "imdb_link": "https://www.imdb.com/title/tt0108052"
        },
        {
            "rank": 7,
            "title": "The Lord of the Rings: The Return of the King",
            "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "9.0",
            "id": "top7",
            "year": 2003,
            "imdbid": "tt0167260",
            "imdb_link": "https://www.imdb.com/title/tt0167260"
        },
        {
            "rank": 8,
            "title": "Pulp Fiction",
            "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
            "genre": [
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.9",
            "id": "top8",
            "year": 1994,
            "imdbid": "tt0110912",
            "imdb_link": "https://www.imdb.com/title/tt0110912"
        },
        {
            "rank": 9,
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top9",
            "year": 2001,
            "imdbid": "tt0120737",
            "imdb_link": "https://www.imdb.com/title/tt0120737"
        },
        {
            "rank": 10,
            "title": "The Good, the Bad and the Ugly",
            "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Adventure",
                "Western"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top10",
            "year": 1966,
            "imdbid": "tt0060196",
            "imdb_link": "https://www.imdb.com/title/tt0060196"
        },
        {
            "rank": 11,
            "title": "Forrest Gump",
            "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
            "genre": [
                "Drama",
                "Romance"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top11",
            "year": 1994,
            "imdbid": "tt0109830",
            "imdb_link": "https://www.imdb.com/title/tt0109830"
        },
        {
            "rank": 12,
            "title": "Fight Club",
            "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
            "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top12",
            "year": 1999,
            "imdbid": "tt0137523",
            "imdb_link": "https://www.imdb.com/title/tt0137523"
        },
        {
            "rank": 13,
            "title": "The Lord of the Rings: The Two Towers",
            "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.8",
            "id": "top13",
            "year": 2002,
            "imdbid": "tt0167261",
            "imdb_link": "https://www.imdb.com/title/tt0167261"
        },
        {
            "rank": 14,
            "title": "Inception",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top14",
            "year": 2010,
            "imdbid": "tt1375666",
            "imdb_link": "https://www.imdb.com/title/tt1375666"
        },
        {
            "rank": 15,
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
            "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
            "genre": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top15",
            "year": 1980,
            "imdbid": "tt0080684",
            "imdb_link": "https://www.imdb.com/title/tt0080684"
        },
        {
            "rank": 16,
            "title": "The Matrix",
            "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
            "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
            "genre": [
                "Action",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top16",
            "year": 1999,
            "imdbid": "tt0133093",
            "imdb_link": "https://www.imdb.com/title/tt0133093"
        },
        {
            "rank": 17,
            "title": "Goodfellas",
            "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
            "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
            "genre": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top17",
            "year": 1990,
            "imdbid": "tt0099685",
            "imdb_link": "https://www.imdb.com/title/tt0099685"
        },
        {
            "rank": 18,
            "title": "Spider-Man: Across the Spider-Verse",
            "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
            "image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Animation",
                "Action",
                "Adventure"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top18",
            "year": 2023,
            "imdbid": "tt9362722",
            "imdb_link": "https://www.imdb.com/title/tt9362722"
        },
        {
            "rank": 19,
            "title": "Interstellar",
            "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
            "genre": [
                "Adventure",
                "Drama",
                "Sci-Fi"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.7",
            "id": "top19",
            "year": 2014,
            "imdbid": "tt0816692",
            "imdb_link": "https://www.imdb.com/title/tt0816692"
        },
        {
            "rank": 20,
            "title": "One Flew Over the Cuckoo's Nest",
            "description": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
            "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
            "big_image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
            "genre": [
                "Drama"
            ],
            "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
            "rating": "8.6",
            "id": "top20",
            "year": 1975,
            "imdbid": "tt0073486",
            "imdb_link": "https://www.imdb.com/title/tt0073486"
        }]);

    const getFavMovies = async () => {
        const res = await fetch('/api/favouriteMovies');
        const data = await res.json();
        console.log(data);
    }

    // const fetchMovies = async () => {
    //     const moviesList = await getMovies();
    //     console.log(moviesList);
    //     setMovies(moviesList.data.slice(0, 11));
    // }

    // console.log(movies)

    // useEffect(() => {
    //     fetchMovies();
    // }, [])

    return (
        <div className='container h-screen overflow-y-scroll max-w-[75rem] py-4 font-montserrat space-y-8'>
            {/* first section */}
            <div className='flex items-center justify-between'>
                <div className='bg-gray-100 flex px-4 py-3 items-center w-[50%]'>
                    <input type='text' className='w-full bg-transparent outline-none' placeholder='Search...' />
                    <CiSearch className='text-2xl' />
                </div>
                <div className='flex items-center w-[35%] cursor-pointer justify-around'>
                    <div onClick={getFavMovies} className='group bg-gray-100 flex hover:tracking-widest active:scale-90 transition-all duration-500 ease-in-out items-center gap-1 w-fit px-4 py-3 rounded-full'>
                        Favourites
                        <CiHeart className='group-hover:hidden text-xl' />
                        <IoMdHeart className='hidden group-hover:block group-hover:text-red-500  text-xl' />
                    </div>
                    <div className='bg-gray-50 hover:bg-gray-100 rounded-full hover:tracking-widest transition-all ease-in-out duration-500 flex items-center px-4 py-3 gap-2'>
                        <FaCircleUser className='text-xl' /> Akash
                    </div>
                </div>
            </div>
            {/* second section */}
            {/* <MoviesList /> */}
            <div className='w-full relative h-[23rem]'>
                <img className='w-full h-full blackishBg' src='https://imgs.search.brave.com/yzCgKAOafpkAj4JT5KJgq_AVZU_AGU3P2cxYbeKVuOg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9yZW5kZXJl/ZC9zZWFyY2gvcG9z/dGVyLzgvNi9icmVh/ay9pbWFnZXMvYXJ0/d29ya2ltYWdlcy9t/ZWRpdW0vMy9icmVh/a2luZy1iYWQtcGFp/bnRpbmctMi1wYXVs/LW1laWplcmluZy5q/cGc' alt='banner' />
                <div className='absolute top-[30%] translate-x-8 space-y-3 text-white '>
                    <h1 className='font-bold text-4xl'>Breaking Bad</h1>
                    <p className='font-medium text-lg'>World's Best Mafia Story <WordBreak /> Ever Seen</p>
                    <button className='flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-sm'><IoPlayCircleOutline className='text-2xl' />Watch Now</button>
                </div>
            </div>
            {/* third section */}
            <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Movies</h2>
                    <div className='flex items-center gap-6'>
                        <FilterGenres />
                        <div onClick={() => Router.push('/movieslist')} className='bg-gray-100 rounded-full px-6 py-2 cursor-pointer'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {movies?.map(item => {
                        return <div className='group min-w-[12rem] relative gradient-overlay' key={uuidv4()}>
                            <img src={item?.image} className='w-full' alt='movie img' />
                            <CiHeart className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                            <div className='absolute w-full bottom-2 text-center text-white'>
                                <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                <p className='font-medium text-xs'>{item?.genre[0]}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            {/* fourth section */}
            {/* <div className='space-y-6'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-2xl'>Web Series</h2>
                    <div className='flex items-center gap-6'>
                        <div className='bg-gray-100 rounded-full px-6 py-2'>See All</div>
                    </div>
                </div>
                <div className='flex h-full gap-8 overflow-x-scroll'>
                    {webShows?.map(item => {
                        return <div className='group min-w-[12rem] relative gradient-overlay' key={uuidv4()}>
                            <img src={item?.image} className='w-full' alt='movie img' />
                            <CiHeart className='absolute top-4 right-4 hidden group-hover:block text-white font-extrabold cursor-pointer  text-3xl' />
                            <div className='absolute w-full bottom-2 text-center text-white'>
                                <h2 className='font-semibold text-sm'>{item?.title}</h2>
                                <p className='font-medium text-xs'>{item?.genre[0]}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div> */}
        </div>
    )
}

export default Contents