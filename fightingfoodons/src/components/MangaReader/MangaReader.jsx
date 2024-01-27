import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './MangaReader.css';

export const MangaReader = (props) => {
    const numberOfPages = props.numberOfPages;

    let mangaChapterPages = [];

    for (let i = 1; i <= numberOfPages; i++) {
        let chapterNumber = props.chapterNumber;
        let pageNumber = i;
        let imagePath = "db/manga/chapters/" + props.language + "/ch" + chapterNumber + "/ch" + chapterNumber + "-p" + pageNumber + ".jpg";
        mangaChapterPages.push(
            <div key={pageNumber}>
            <img src={imagePath} className="mangaPageImage"/> <br />
            </div>
        )
    }

  return (
    <div>
        <Modal
            show={props.show && props.id === props.justClicked}
            id={props.id}
            onHide={props.close}
            dialogClassName="mangaReaderModal"
            >
        <Modal.Header closeButton>
          <Modal.Title>Chapter# {props.chapterNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mangaChapterPages}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
