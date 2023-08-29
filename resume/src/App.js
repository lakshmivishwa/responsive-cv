
import Homepage from './components/Homepage/Homepage';
import PersonalDetail from './components/PersonalDetail/PersonalDetail';
import Careers from './components/Careers/careers';
import Educations from './components/Educations/Educations';
import Abilities from './components/Abilities/Abilities';
import Projects from './components/Projects/Projects';
import axios from "axios";
import Footer from './components/Footer/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(typeof response.data)
        // console.log(JSON.parse(response.data));
        setUserData(response.data);  // Receive data as a JSON object
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(userData);
  let data = userData[0]
  return (
    <div className="App">
      <Homepage />
      <PersonalDetail image={data?.profilePhoto || []} objective={data?.objective || []} />
      <Careers data={data?.experiences || []} />
      <Educations data={data?.education || []} />
      <Abilities codingData={data?.coding || []} languageData={data?.languages || []} toolsData={data?.tools || []} />
      <Projects data={data?.projects || []} />
      <Footer />
    </div>
  );
}

export default App;
