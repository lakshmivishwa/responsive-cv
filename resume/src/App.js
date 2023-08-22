
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
  const [data, setData] = useState(null);

  let baseURL = `http://localhost:3000/data/data.json`
  async function getData() {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      // console.log(data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Homepage />
      <PersonalDetail />
      <Careers data={data?.experiences || []} />
      <Educations data={data?.education || []} />
      <Abilities codingData={data?.coding || []} languageData={data?.languages || []} toolsData={data?.tools || []} />
      <Projects data={data?.projects || []} />
      <Footer />

    </div>
  );
}

export default App;
