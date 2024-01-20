import React, { useEffect, useState } from 'react';
import { getDataFromServer } from '../SharedHooks/FetchData';
import { MangaReader } from '../MangaReader';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './MangaPage.css';

export const MangaPage = () => {
    const [mangaData, setMangaData] = useState([]);
    const [showMangaReader, setShowMangaReader] = useState({openReader: false, justClicked: null});

    const getMangaData = async () => {
        const result = await getDataFromServer.getMangaDataFromServer();
        setMangaData(result);
    }

    const handleOpenMangaReader = (id) => {
        let clickedId = id.chapterNumber;

        setShowMangaReader({
            openReader: true,
            justClicked: clickedId
        })
    }

    const handleCloseMangaReader = () => {
        setShowMangaReader({
            openReader: false,
            justClicked: null
        })
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
                            let numberOfPages = chapter.numberOfPages;


                            return (
                                <div key={chapterNumber}>
                                    <div>
                                        <p className="lead">Ch# {chapterNumber} - {chapterTitleJapanese} (Japanese) | {chapterTitleEnglish} (English)</p>
                                        <p>Summary: {chapterSummary}</p>
                                    </div>

                                    <Button onClick={() => handleOpenMangaReader({chapterNumber})}>Read Manga</Button>
                                    <MangaReader
                                        id={chapterNumber}
                                        chapterNumber={chapterNumber}
                                        numberOfPages={numberOfPages}
                                        justClicked={showMangaReader.justClicked}
                                        show={showMangaReader.openReader}
                                        close={() => handleCloseMangaReader({chapterNumber})}
                                        />

                                    <hr />
                                </div>
                            )

                        })
                    }
                </div>
            </Container>
        </div>
    )
}