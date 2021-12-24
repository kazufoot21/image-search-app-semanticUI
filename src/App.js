import './App.css';
import { SearchBar } from './components/SerachBar';

function App() {
  const onSearchSubmit = (term) => {
    console.log(term);
  };

  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
