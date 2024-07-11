import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/DocumentDetailPage.css';

const DocumentDetailPage = () => {
  const { filename } = useParams();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    axios.get(`https://vet-consult.ru/api/document/${filename}`)
      .then(response => {
        setDocument(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the document!", error);
      });
  }, [filename]);

  if (!document) {
    return <div>{filename}</div>;
  }

  return (
    <div className="document-detail-page">
      <h1>{document.filename}</h1>
      <a href={`${process.env.REACT_APP_API_URL}/uploads/${filename}`}>Скачать</a>
      <p>{document.description}</p>
    </div>
  );
};

export default DocumentDetailPage;
