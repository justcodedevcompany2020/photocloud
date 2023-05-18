import { useRef, useState } from "react"
import styled from "styled-components"
import { ChangePasswordForm } from "../../components/changePasswordForm/ChangePasswordForm"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Settings = () =>{
    const [changePasswordToggle, setChangePasswordToggle] = useState(false)
    const refReg = useRef()
    useOnClickOutside(refReg, () => setChangePasswordToggle(false));
    console.log(changePasswordToggle)
    const handelClick = () =>{
        // setChangePasswordToggle(false)
    }
    return <>
        <MainBlock>
            <Block>
                <Content>
                    <InputWrapper>  
                        <Lable>Имя</Lable>
                        <Input width={'500px'} max={'500px'} inputName={'Имя'} />
                    </InputWrapper>
                    <InputWrapper>
                        <Lable>Юзернейм</Lable>
                        <Input width={'500px'} max={'500px'} inputName={'Username'} />
                    </InputWrapper>
                    <InputWrapper>
                        <Lable>Эл. почта</Lable>
                        <Input width={'500px'} max={'500px'} inputName={'User@gmail.com'} />
                    </InputWrapper>
                    <TextMobile onClick={()=>setChangePasswordToggle(true)}>Сменить пароль</TextMobile>
                    <Br />
                    <ButtonWrapper>
                        <Button  text={'Сохранить'} bgColor={'#4F6688'} width={'230px'} ml={'10px'} />
                        <Text onClick={()=>setChangePasswordToggle(true)}>Сменить пароль</Text>
                    </ButtonWrapper>
                </Content>
            </Block>
        </MainBlock>
        {changePasswordToggle && <ChangePasswordForm onClick = {()=>handelClick()} ref = {refReg} />}
    </>
}
const MainBlock = styled.div`
display:flex;
max-width: 1170px;
min-height: 450px;
width: 95%;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
height: 100px;
margin: auto;
margin-top: 25px;
`
const Block = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
      }
`
const Content = styled.div`
margin: 15px;
height: 100%;
`
const InputWrapper = styled.div`
display: flex;
flex-direction: column;
`
const Lable = styled.label `
color:#5B5B5B;
text-align: start;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
margin-bottom: -5px;    
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
width: 500px;
@media (max-width: 768px) {
    justify-content: center;
    width: 100%;

}
`
const Text = styled.p `
    color:#4F6688;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    border-bottom: 1px solid #4F6688;
    display: block;
    @media (max-width: 768px) {
        display: none;
      }
`
const TextMobile = styled.p `
    display: none;

    @media (max-width: 768px) {
        display: block;
        text-align: end;
        color:#4F6688;
        font-style: normal;
        font-size: 16px;
        line-height: 19px;
        margin-bottom:0;
        // width: 120px;

      }
`
const Br = styled.div `
    width: 120px;
    border-bottom: 1px solid #4F6688;
    position: absolute;
    right: 24px;
    display: none;
    @media (max-width: 768px) {
        display: block;
      }
`