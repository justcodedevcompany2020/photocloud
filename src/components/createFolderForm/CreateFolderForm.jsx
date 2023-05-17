import { forwardRef } from "react";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import styled from "styled-components";

export const CreateFolderForm = forwardRef(({ forgotPassCB, regCB }, ref) => {
    return (<BackDiv>
        <MainBlockWrapper>
            <MainBlock ref={ref}>
                <Content>
                    <RegistrationTitle>Создать папку</RegistrationTitle>
                    <Input inputName={'Название папки'} />
                    <Button mt={'40px'} bgColor={'#4F6688'} text={'Создать'} />
                </Content>
            </MainBlock>
        </MainBlockWrapper>
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
`
const MainBlock = styled.div`
left: 0px;
top: 0px;
z-index: 999;
width: 570px;
height: 299px;;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
`
const MainBlockWrapper = styled.div`
display: inline-block;
vertical-align: middle;
margin-left: -0.35em;
`
const Content = styled.div`
width: 100%
`
const RegistrationTitle = styled.div`
padding-top: 38px;
padding-bottom: 15px;
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 47px;
text-align: center;
color: #333333;
`