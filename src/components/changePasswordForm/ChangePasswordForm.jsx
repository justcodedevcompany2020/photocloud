import styled from "styled-components"
import { Input } from "../../ui/Input"
import { Button } from "../../ui/Button"
import { forwardRef } from "react";

export const ChangePasswordForm = forwardRef(({ loginBtnCB }, ref) => {
    console.log('85')
    return (<BackDiv>
        <MainBlock ref={ref}>
            <RegistrationTitle>Cмена пароля</RegistrationTitle>
            <SubText>Придумайте сложный пароль,содержащий
                строчные и прописные буквы,а так же цифры
                и символы</SubText>
            <Input width={'100%'} inputName={'Старый пароль'} />
            <Input width={'100%'} inputName={'Новый пароль'} />
            <Input width={'100%'} inputName={'Повтор пароля'} />
            <Button mt={'40px'} bgColor={'#4F6688'} text={'Сохранить'} />
        </MainBlock>
    </BackDiv>)
});

const BackDiv = styled.div`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 18px rgba(24, 39, 75, 0.12);
backdrop-filter: blur(20px);
position: fixed;
top:0px;
right:0px;
bottom:0px;
left:0px;
z-index: 9989;
display: flex;
justify-content: center;
align-items: center;
`
const MainBlock = styled.div`
left: 0px;
top: 0px;
z-index: 999;
width: 570px;
height: 506px;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
@media (max-width: 768px) {
    width:90%;
    box-sizing: border-box;
    padding: 0 20px;
}
`
const RegistrationTitle = styled.div`
padding-top: 38px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 47px;
text-align: center;
color: #333333;
@media (max-width: 768px) {
    font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
}
`

const SubText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
padding: 0 5px;
`