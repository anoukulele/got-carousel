import React from 'react';
import styled from 'styled-components';
 
const Arrows=styled.img`
height: 20%; align-self: across-start;
transform: ${props=>props.reverse ? 'rotate(180deg)' : 'rotate(0deg)'}`;
const Image=styled.img`
width: 100%; height: 33%;
border: 20px solid #E0938E; border-top-left-radius: 2em;
border-top-right-radius: 2em; border-bottom-left-radius: 2em;
border-bottom-right-radius: 2em; justify-content: center;`;
const Summary=styled.div`
display: flex; text-align: justify; 
width: 100%; height: 50%; overflow: scroll;
border-bottom-left-radius: 2em; border-bottom-right-radius: 2em;
color: #230A1F; font-family: 'Snell Roundhand'; background-color: #E0938E;`;
const Name=styled.div`
display: flex; width: 90%; height: 15%; font-size: 150%; justify-content: center; text-align: center;
color: #25455B; font-family: 'Brush Script Std'; background-color: #E0938E;`;
const Season=styled.div`
display: flex; width: 90%; height: 4%; font-size: 70%; justify-content: center;
color: #E4D561; font-family: 'OCR A Std'; background-color: #E0938E;`;

const defaultImg = 'https://pbs.twimg.com/profile_images/867070777878859777/MtfeEkqy_400x400.jpg';
const arrowImg = "http://www.freeiconspng.com/uploads/right-arrow-icon-114837-11.png";

const Card = (episode)=> {

    if (episode.display){
        let summary = episode.display.summary;
        summary = summary.slice(3, summary.length-4);
        let season = episode.display.season;
        let number = episode.display.number;         
      return(
        <div className="CardItem">
            <Image src={episode.display.image.medium} />
            <Name>{episode.display.name}</Name>
            <Season>{'Season ' + season + ' ~ ' + 'Episode ' + number}</Season>
            <Summary>{summary}</Summary>
        </div>
        ) }
    else return(
        <div>
            <Image src={defaultImg} /> 
        </div>
        
    )};
export default ({nextClick:nxt, backClick:bck , episode:episode})=> {
  console.log(episode);
    return(
        <div className="Card">
            <Arrows onClick={bck} reverse={true} degree={180} src={arrowImg}/>
            <Card display={(episode[0])} />
            <Card display={(episode[1])}/>
            <Card display={(episode[2])}/>
            <Arrows onClick={nxt} reverse={false} degree={180} src={arrowImg}/>   
        </div>
    )}