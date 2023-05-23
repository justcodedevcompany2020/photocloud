import Multiselect from "multiselect-react-dropdown";
import { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { add_photo } from "../../store/action/action";
import { Button } from "../../ui/Button";

import './style.css'
export const AddPhoto = forwardRef(({id,loading,length},ref) =>{
    const dispatch = useDispatch()
    const [image, setImage] = useState([])
    const [array,setArray] = useState([])
    const CloseItem = (i) =>{
        let item = [...array]
        item.splice(i,1)
        setArray(item)
    } 
    const showImg = (event) =>{
        let img;
        let itme = [...array]
        img = (event.target.files.length);
        let arr = Array(img).fill(0);
        let count = 8-(length+itme.length)
        arr = arr.slice(0,count)
        console.log(arr);
       arr =  arr.map((el,i)=>{
           console.log('[ps')
            itme.push(URL.createObjectURL(event.target.files[i]))
            return event.target.files[i]
        })
        console.log(arr)
        setArray(itme)
        setImage(arr)
    }
    const [multyData,setMultyData] = useState([
        {name: '10', id: 1},
        {name: '11️', id: 1},
        {name: '21️', id: 1},
    ])
    const [day,setDay] = useState(null)
    const sendData = () =>{
        const formData = new FormData()
        image.map((elm,i)=>{
            formData.append('file[]',elm)
        })
        formData.append('day',10)
        formData.append('folder_id',id)
        dispatch(add_photo(formData))
    }
    return <BackDiv>
        <MainBlock ref  = {ref}>
        <RecoveryContent>
            <RecoveryPassText>Добавить изображение</RecoveryPassText>
            <CardWrapper>
                {(array.length+length) <8 && <Card>
                <label for="images" class="drop-container"> + </label>
                    <input onChange={(e)=>showImg(e)} multiple type={'file'} id = {'images'}   accept="image/png, image/jpeg"></input>
                    {/* <input onChange={(e)=>showImg(e)} multiple type={'file'}  accept="image/png, image/jpeg"></input> */}
                </Card>}
                {array.map((el, i) =>  {
                return<Card>
                    <Close onClick ={()=>CloseItem(i)}>
                        <span>x</span>
                    </Close >
                    <CardImg alt="preview image" src={el} key={i}/>
                </Card> 
                })}
            </CardWrapper>
                    <Multiselect 
                        singleSelect
                        showArrow
                        onSelect = {(e)=>{setDay(e[0].name)}}
                        options = {multyData}
                        selectedValues
                        displayValue="name"
                        style = {{padding:'20px'}}
                    />
            <Button loading = {loading} onClick={()=>sendData()} mt = {'30px'} mb = {'30px'} text ={'Загрузить'} bgColor = '#4F6688' />
        </RecoveryContent>
        </MainBlock>
    </BackDiv>
})
const MainBlock = styled.div`
left: 0px;
top: 0px;
z-index: 999;
width: 570px;
min-height: 400px;
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
position: relative;
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
const Close = styled.div`
position: absolute;
margin: 0;
background: #FFFFFF;
font-size: 13px;
border: 1px solid rgba(190, 190, 190, 0.2);
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 29px;
right: -8px;
margin: auto;
top: -12px;
width: 25px;
justify-content: center;
align-items: center;
display: flex;
height: 25px;
`