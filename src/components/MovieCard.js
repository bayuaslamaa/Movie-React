import React from 'react'


export default (props) => {
    const { movie } = props
    console.log(movie)
    return (
        <>
            <div className="wrapper">
                <div className="main_card">
                    <div className="card_left">
                        <div className="card_datails">
                            <h1>{movie.Title}</h1>
                            <div className="card_cat">
                                <p className="year">{movie.Year}</p>
                                <p className="genre">{movie.Type} </p>
                            </div>
                            <p className="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
                            <a href="https://www.imdb.com/title/tt4912910/" >Read More</a>

                        </div>
                    </div>
                    <div className="card_right">
                        <div className="img_container">
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div className="play_btn">
                            <a href="https://www.imdb.com/title/tt4912910/" >
                                <i className="fas fa-play-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}