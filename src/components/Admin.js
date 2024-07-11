import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [categories, setCategories] = useState({});
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [docCategory, setDocCategory] = useState('');
  const [docSubcategory, setDocSubcategory] = useState('');
  const [docDescription, setDocDescription] = useState('');
  const [docFile, setDocFile] = useState(null);

  useEffect(() => {
    axios.get(`https://vet-consult.ru/api/categories`)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    axios.post(`$https://vet-consult.ru/api/news`, { news_title: newsTitle, news_content: newsContent })
      .then(response => {
        alert(response.data.message);
        setNewsTitle('');
        setNewsContent('');
      })
      .catch(error => {
        console.error("There was an error posting the news!", error);
      });
  };

  const handleDocumentSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('doc_category', docCategory);
    formData.append('doc_subcategory', docSubcategory);
    formData.append('doc_description', docDescription);
    formData.append('doc_file', docFile);

    axios.post(`https://vet-consult.ru/api/documents`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        alert(response.data.message);
        setDocCategory('');
        setDocSubcategory('');
        setDocDescription('');
        setDocFile(null);
      })
      .catch(error => {
        console.error("There was an error posting the document!", error);
      });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <h2>Post a News</h2>
      <form onSubmit={handleNewsSubmit}>
        <label>Title:</label>
        <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} />
        <label>Content:</label>
        <textarea value={newsContent} onChange={(e) => setNewsContent(e.target.value)}></textarea>
        <button type="submit">Post News</button>
      </form>

      <h2>Add a Document</h2>
      <form onSubmit={handleDocumentSubmit}>
        <label>Category:</label>
        <select value={docCategory} onChange={(e) => setDocCategory(e.target.value)}>
          {Object.keys(categories).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <label>Subcategory:</label>
        <select value={docSubcategory} onChange={(e) => setDocSubcategory(e.target.value)}>
          {categories[docCategory] && categories[docCategory].map(subcategory => (
            <option key={subcategory} value={subcategory}>{subcategory}</option>
          ))}
        </select>
        <label>Description:</label>
        <textarea value={docDescription} onChange={(e) => setDocDescription(e.target.value)}></textarea>
        <label>File:</label>
        <input type="file" onChange={(e) => setDocFile(e.target.files[0])} />
        <button type="submit">Upload Document</button>
      </form>
    </div>
  );
}

export default Admin;
