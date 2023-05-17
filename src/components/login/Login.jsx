import { forwardRef } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Login = forwardRef(({ forgotPassCB, regCB, loginCloseCB }, ref) => {
    const handleCloseModal = () => {
        regCB()
        loginCloseCB()
    }

    return (<BackDiv>
        <MainBlock ref={ref}>
            <Content>
                <RegistrationTitle>Вход</RegistrationTitle>
                <Input width = {'100%'} inputName={'Юзернейм'} />
                <Input width = {'100%'} inputName={'Пароль'} />
                <ForgotPasswordText onClick={forgotPassCB}>Забыли пароль</ForgotPasswordText>
                <Link to={'/userProfile'}> <Button onClick={handleCloseModal} mt={'40px'} bgColor={'#4F6688'} text={'Войти'} /></Link>
                <BtnSubText>Нет аккаунта ? <LoginText >Зарегистрироваться</LoginText></BtnSubText>
            </Content>
        </MainBlock>
    </BackDiv>)
});

const BackDiv = styled.div`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 18px rgba(24, 39, 75, 0.12);
backdrop-filter: blur(20px);
position:fixed;
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
height: 419px;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
@media (max-width: 425px) {
    width:90%;
    box-sizing: border-box;
    padding: 0 20px;
}
`
const Content = styled.div`

`
const LoginText = styled.span`
color: #4F6688;
cursor: pointer;
`
const ForgotPasswordText = styled.p`
margin-top: 0px;
margin-right: 115px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 15px;
text-align: right;
text-decoration-line: underline;
color: #333333;
cursor: pointer;
`
const BtnSubText = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 15px;
text-align: center;
color: #333333;
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
`