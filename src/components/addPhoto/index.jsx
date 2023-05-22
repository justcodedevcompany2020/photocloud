import { useState } from "react";
import styled from "styled-components"
import './style.css'
export const AddPhoto = (ref) =>{
    const [image, setImage] = useState([])
    const showImg = (event) =>{
        let img;
        
        img = (event.target.files.length);
        let arr = Array(img).fill(0);
        arr = arr.slice(0,8)
        console.log(arr);
       arr =  arr.map((el,i)=>{
            return URL.createObjectURL(event.target.files[i])
        })
        console.log(arr)
        setImage(arr)
    }
    // console.log('88')
    return <BackDiv>
        <MainBlock>
        <RecoveryContent>
            <RecoveryPassText>Добавить изображение</RecoveryPassText>
            <CardWrapper>
                <Card>
                <label for="images" class="drop-container"> + </label>
                    <input onChange={(e)=>showImg(e)} multiple type={'file'} id = {'images'}   accept="image/png, image/jpeg"></input>
                    {/* <input onChange={(e)=>showImg(e)} multiple type={'file'}  accept="image/png, image/jpeg"></input> */}
                </Card>
                {image.map((el, i) =>  
                <Card>
                    <CardImg alt="preview image" src={el} key={i}/>
                </Card> 
                )}
            </CardWrapper>

        </RecoveryContent>
        </MainBlock>
    </BackDiv>
}

const MainBlock = styled.div`
left: 0px;
top: 0px;
z-index: 999;
width: 570px;
height: 400px;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
@media (max-width: 768px) {
    width:90%;
    box-sizing: border-box;
    padding: 0 20px;
}

`
const RecoveryContent = styled.div`
padding-top: 38px;
`
const BackDiv = styled.div`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 18px rgba(24, 39, 75, 0.12);
backdrop-filter: blur(20px);
position:absolute;
top:0px;
right:0px;
bottom:0px;
left:0px;
z-index: 9989;
display: flex;
justify-content: center;
align-items: center;
`
const RecoveryPassText = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 41px;
text-align: center;
color: #333333;
margin-bottom: 9px;
margin-top: 0px;

`
const Card = styled.div`
width: 98px;
height: 98px;
border-radius: 10px;
margin: 10px 20px;
`
const CardImg = styled.img `
width: 98px;
height: 98px;
border-radius: 10px;
`
const CardWrapper = styled.div `
display: flex;
flex-wrap: wrap
`