import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Search from './components/Search';

function App() {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=>{
    var API_KEY = '29119929-60cb28f16ba0fc293b1a5521f';
      fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo=true`).then(res=> res.json())
      .then(data=> {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  },[term])
  return (
    <div className='container mx-auto'>
    <Search searchText={(text)=> setTerm(text)}/>
    {!isLoading && images.length === 0 && <h1 className='text-4xl text-center mx-auto mt-32'>No Images Found</h1>}
      {isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1> : <div className='grid grid-cols-3 gap-4'>
        
        {images.map((image)=>(
          <Cards key={image.id} image={image} />
        ))}
      </div>}
      
    </div>
  );
}

export default App;
