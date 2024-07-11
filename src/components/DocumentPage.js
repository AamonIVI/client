import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './styles/DocumentPage.css';
import axios from 'axios';

const DocumentPage = () => {
  const { category, subcategory } = useParams();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get(`https://vet-consult.ru/api/documents`)
      .then(response => {
        // Filter documents based on the category and subcategory from URL parameters
        const filteredDocuments = response.data.filter(doc => 
          doc.category === category && doc.subcategory === subcategory
        );
        setDocuments(filteredDocuments);
      })
      .catch(error => {
        console.error("There was an error fetching the documents!", error);
      });
  }, [category, subcategory]);

  return (
    <main className="document-page">
      <h1 className='h1'>{subcategory}</h1>
      <div className="documents">
        <ul>
          {documents.map((doc, index) => (
            <li key={index}>
              <Link to={`/document/${category}/${subcategory}/${doc.filename}`}>
                {doc.filename}
              </Link> ({doc.upload_date})
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default DocumentPage;