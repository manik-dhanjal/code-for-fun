import React,{useEffect, useState} from 'react'
import Card from '../components/Card';
import styled from 'styled-components';
import axios from "axios";
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
`

const Home = ({type}) => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try{
        const res = await axios.get(`/video/${type}`);
        setVideos(res.data);
      }catch(e){
        console.log(e);
      }
    }
    fetchVideos();
  },[type])
  return (
    <Container>
      {
        videos.map((video) => (
          <Card key={video._id} video={video}/>
        ))
      }
    </Container>
  )
}

export default Home