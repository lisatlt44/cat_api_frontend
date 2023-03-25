import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/CatStyle.css'


function Cat() {
  const [catData, setCatData] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p')
      if (response.status === 200){
        const data = response.data[0]
        setCatData(data)
      }
    }
      loadData()
  }, [])

  const handleClick = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p');
        if (response.status === 200) {
          const data = response.data[0]
          setCatData(data)
        }
      }
    

  return catData && (
    <div className="cat-container">
      <h1>Cat generator</h1>
      <div className="card">
        <img className="card-img-top" src={catData.url} alt="random cat" />
        <div className="card-body">
          <h5 className="card-title">Breed : {catData.breeds[0].name}</h5>
          <p className="card-text">Description : {catData.breeds[0].description}</p>
          <p className="card-text">Temperament : {catData.breeds[0].temperament}</p>
          <button className="btn" onClick={handleClick}>See another one</button>
        </div>
      </div>
    </div>
  );
}

export default Cat;


  