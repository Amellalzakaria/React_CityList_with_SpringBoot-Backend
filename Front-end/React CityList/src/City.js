import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import CityList from './CityList'; 
import 'bootstrap/dist/css/bootstrap.min.css';

 
const City = () => { 
 const [cities, setCities] = useState([]); 
 
 useEffect(() => { 
 // Effectuez l'appel API pour récupérer la liste des villes 
 axios.get('/api/cities') 
 .then(response => setCities(response.data)) 
 .catch(error => console.error(error)); 
 }, []); 
 
 return ( 
 <div> 
 <h1>City List</h1> 
 <CityList cities={cities} /> 
 </div> 
 ); 
}; 
 
export default City;