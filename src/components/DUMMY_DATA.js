import React, { useState, useEffect } from 'react';
import axios from 'axios';


    const [DUMMY_FOOD_DATA, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:8001/api/getalldata");
        setUsers(response.data);
      }
      fetchData();
    }, []); 
  
  



export default DUMMY_FOOD_DATA;















