import React, { useEffect, useState } from 'react';
import { getDataFromServer } from '../SharedHooks/FetchData';
import Container from 'react-bootstrap/Container';
import './MangaPage.css';

export const MangaPage = () => {
    const [mangaData, setMangaData] = useState([]);

    const getMangaData = async () => {
        const result = await getDataFromServer.getMangaDataFromServer();
        setMangaData(result);
    }

    useEffect( () => {
        getMangaData();
    }, []);

    return (
        <div>
            <Container>
                <h2>Read the manga!</h2>
                <div>
                    {
                        mangaData.map( (chapter) => {
                            let chapterNumber = chapter.chapterNumber;
                            let chapterTitleJapanese = chapter.chapterTitleJapanese;
                            let chapterTitleEnglish = chapter.chapterTitleEnglish;
                            let chapterSummary = chapter.chapterSummary;

                            return (
                                <div>
                                    <p className="lead">Ch# {chapterNumber} - {chapterTitleJapanese} (Japanese) | {chapterTitleEnglish} (English)</p>
                                    <p>Summary: {chapterSummary}</p>
                                </div>
                            )

                        })
                    }
                </div>
            </Container>
        </div>
    )
}