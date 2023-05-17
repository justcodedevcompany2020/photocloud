import React from "react"
import styled from "styled-components"
import { Button } from "../../ui/Button"

export const MiddleInfo = () => {
    return (
        <MainDiv>
            <MainTitle>Загружайте и делитесь изображениями</MainTitle>
            <MainText>Начните загружать изображения простым перетаскиванием в любое место окна прямо сейчас. Ограничение на размер изображения 32 MB. После загрузки, Вам будут доступны прямые ссылки, BB-коды и миниатюры.</MainText>
            <Button text={'Начать загрузку'} bgColor={'#4F6688'}/>
        </MainDiv>
    )
}


export const MainDiv = styled.div`
margin-top: 312px;
`
export const MainTitle = styled.span`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 47px;
text-align: center;
color: #4F6688;
`
export const MainText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 26px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #333333;
margin-left: auto;
margin-right: auto;
width: 44em
`