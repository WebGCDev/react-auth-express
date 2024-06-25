import React, { useState } from 'react';
import styles from '../css/modules/Form.module.css';
import Button from './Button';

const Form = ({ onAddArticle }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    content: '',
    category: '',
    tags: {
      '#volleyballplayer': false,
      '#instavolleyball': false,
      '#volleyballlife': false,
    },
    isPublished: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name.startsWith('#')) {
      setFormData((prevData) => ({
        ...prevData,
        tags: {
          ...prevData.tags,
          [name]: checked,
        },
      }));
    } else if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Il titolo è obbligatorio';
    if (!formData.image.trim())
      newErrors.image = "L'URL dell'immagine è obbligatorio";
    if (!formData.content.trim())
      newErrors.content = 'Il contenuto è obbligatorio';
    if (!formData.category.trim())
      newErrors.category = 'La categoria è obbligatoria';
    if (!Object.values(formData.tags).some((tag) => tag))
      newErrors.tags = 'Almeno un tag deve essere selezionato';
    if (!formData.isPublished)
      newErrors.isPublished = 'Devi selezionare Pubblica';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onAddArticle(formData);
      setFormData({
        title: '',
        image: '',
        content: '',
        category: '',
        tags: {
          '#volleyballplayer': false,
          '#instavolleyball': false,
          '#volleyballlife': false,
        },
        isPublished: false,
      });
      setErrors({});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Titolo Post</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <div className="text-danger">{errors.title}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Immagine URL</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        {errors.image && <div className="text-danger">{errors.image}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Contenuto</label>
        <textarea
          className="form-control"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        {errors.content && <div className="text-danger">{errors.content}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Categoria</label>
        <select
          className="form-select"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Seleziona una categoria</option>
          <option value="clubnews">Club News</option>
          <option value="coaches">Coaches</option>
          <option value="referees">Referees</option>
          <option value="education&training">Education & Training</option>
          <option value="beachvolleyball">Beach Volleyball</option>
          <option value="youthleague">Youth League</option>
        </select>
        {errors.category && (
          <div className="text-danger">{errors.category}</div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label">Tags</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="#volleyballplayer"
            checked={formData.tags['#volleyballplayer']}
            onChange={handleChange}
          />
          <label className="form-check-label">#volleyballplayer</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="#instavolleyball"
            checked={formData.tags['#instavolleyball']}
            onChange={handleChange}
          />
          <label className="form-check-label">#instavolleyball</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="#volleyballlife"
            checked={formData.tags['#volleyballlife']}
            onChange={handleChange}
          />
          <label className="form-check-label">#volleyballlife</label>
        </div>
        {errors.tags && <div className="text-danger">{errors.tags}</div>}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
        />
        <label className="form-check-label">Pubblica</label>
        {errors.isPublished && (
          <div className="text-danger">{errors.isPublished}</div>
        )}
      </div>
      <Button type="submit">Aggiungi Post</Button>
    </form>
  );
};

export default Form;
