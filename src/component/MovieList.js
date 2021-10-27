import React from 'react'
import { useState } from 'react'
import Add from './Add';
import Filter from './Filter';
import MovieCard from './MovieCard';


const MovieList = () => {

    const [text, setText] = useState('')
    const [rate, setRate] = useState('')
    const [films, setFilms] = useState([
        {
            posterUrl: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
            title: "Breaking Bad",
            description: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
            rate: 3
        },
        {
            posterUrl: "https://fr.web.img4.acsta.net/pictures/19/11/12/09/10/0133181.jpg",
            title: "You",
            description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
            rate: 7
        },
        {
            posterUrl: "https://fr.web.img6.acsta.net/pictures/19/08/07/10/08/2485376.jpg",
            title: "Naruto Shippuden",
            description: "Naruto Uzumaki returns home after two years of intensive training and teams up with Sakura Haruno to fight an evil organization.",
            rate: 8
        },
        {
            posterUrl: "https://i.pinimg.com/originals/aa/15/42/aa15422cb191838cd1b4737c7325d1fc.jpg",
            title: "Vikings",
            description: "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision..",
            rate: 2
        },
        {
            posterUrl: "https://fr.web.img5.acsta.net/pictures/19/08/09/14/53/1842996.jpg",
            title: "One Piece",
            description: "One Piece is a manga and anime set in a world of piracy. Spanning several hundred chapters, it a relatively varied universe.",
            rate: 4
        },
        {
            posterUrl: "http://img.over-blog-kiwi.com/0/95/30/84/20191024/ob_7e7b43_1571909767-action-dossier-de-presse-na.jpg",
            title: "Narcos",
            description: "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
            rate: 1
        },
        {
            posterUrl: "https://i.pinimg.com/originals/e4/00/1e/e4001e0103f9a2270e8634a8cc566065.jpg",
            title: "La Casa de Papel",
            description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain. Starring:Úrsula Corberó, Álvaro Morte, Itziar Ituño",
            rate: 10
        },
        {
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            title: "Game of Thrones",
            description: "Nine noble families struggle with each other for control of the fairy land of Westeros, while an ancient enemy awaits .",
            rate: 7
        },

    ]);

    const Addm = (addmovie) => {
        setFilms((films) =>
            ([...films, addmovie]))
    }
    const filtertext = (text) => {
        setText(text)
    }
    const filterrate = (rate) => {
        setRate(rate)
    }
    return (
        <div>
            <Filter filtertext={filtertext} filterrate={filterrate} />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: "wrap" }} className="adc">
                {films.filter((el) => (el.rate.toString() >= rate && el.title.toLowerCase().includes(text.toLowerCase()) )).map((element) =>
                    <MovieCard movie={element} />
                )}
            </div>
            <div className="btnadd">
                <Add Addm={Addm} />
            </div>

        </div>

    )
};
export default MovieList