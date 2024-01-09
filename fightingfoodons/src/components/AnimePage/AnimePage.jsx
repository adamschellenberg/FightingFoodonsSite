import React, { useEffect, useState } from 'react';
import { getDataFromServer } from '../SharedHooks/FetchData';
import Container from 'react-bootstrap/Container';
import './AnimePage.css';

export const AnimePage = () => {
    const [animeData, setAnimeData] = useState([]);

    const getAnimeData = async () => {
        const result = await getDataFromServer.getAnimeDataFromServer();
        setAnimeData(result);
    }

    useEffect( () => {
        getAnimeData();
    }, []);

    return (
        <div>
            <Container>
                <h2>Watch the anime!</h2>
                <div>
                    {
                        animeData.map( (episode) => {
                            let episodeNumber = episode.episodeNumber;
                            let episodeTitleEnglish = episode.episodeTitleEnglish;
                            let episodeLink = episode.episodeLink;
                            let episodeSummary = episode.episodeSummary;

                            return (
                                <div>
                                    <p className="lead">Ep# {episodeNumber} - {episodeTitleEnglish}</p>
                                    <p>{episodeSummary}
                                    <br />
                                    <span><a href={episodeLink} target="_blank" rel="noreferrer">Watch on Pluto</a></span>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}