import './App.css';
import axios from 'axios';
import { SearchBar } from './components/SerachBar';
import { useState } from 'react';
import { ImageList } from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: '24958346-b37558ba5f8aa3d534e1ebeae',
        q: term,
      };
      const response = await axios.get('https://pixabay.com/api', { params });
      setImages(response.data.hits);
      if (response.data.total === 0) alert('お探しの画像はありません。');
    } catch {
      alert('画像の取得に失敗しました');
    }
  };

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
