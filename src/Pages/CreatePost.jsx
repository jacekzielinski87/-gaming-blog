// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      id: Date.now(), // Tymczasowe ID (w prawdziwej aplikacji będzie z backendu)
      title: postData.title,
      content: postData.content,
      slug: createSlug(postData.title),
      tags: postData.tags.split(',').map(tag => tag.trim()),
      createdAt: new Date().toISOString()
    };

    // Tutaj dodaj logikę zapisywania do bazy danych
    // savePost(newPost);

    // Przekierowanie do nowego posta
    navigate(`/post/${newPost.slug}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="create-post">
      <h2>Utwórz nowy post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Tytuł:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Treść:</label>
          <textarea
            id="content"
            name="content"
            value={postData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tagi (oddzielone przecinkami):</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={postData.tags}
            onChange={handleChange}
            placeholder="np. react, javascript, programowanie"
          />
        </div>

        <button type="submit">Opublikuj</button>
      </form>
    </div>
  );
};

export default CreatePost;