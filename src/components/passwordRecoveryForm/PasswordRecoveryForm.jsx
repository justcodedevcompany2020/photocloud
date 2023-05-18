import { forwardRef, useEffect, useState } from "react";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import styled from "styled-components";

export const PasswordRecoveryForm = forwardRef((props, ref) => {
    const [data,setData] = useState()
    useEffect(()=>{
        setData(props.data)
    },[])
    const handelChage = (e,i) =>{
        let item = [...data]
        item[i].value = e
        setData(item)
    }
    return (<BackDiv {...props}>
        <MainBlock ref={ref}>
            <RecoveryCodeContent>
                <RecoveryPassText>Восстановление <br />
                    аккаунта</RecoveryPassText>
                <RecoverySubText>
                    Придумайте сложный пароль,содержащий
                    строчные и прописные буквы,а так же цифры
                    и символы
                </RecoverySubText>
                {data?.map((elm,i)=>{
                    return <Input value={elm.value} error = {elm.error} key = {i} onChange = {(e)=>handelChage(e,i)} inputName={elm.lable} />
                })

                }
                <Button loading = {props.loading} onClick={()=>props.handelNewPassword(data)} mt={'25px'} bgColor={'#4F6688'} text={'Подтвердить'} />
            </RecoveryCodeContent>
        </MainBlock>
    </BackDiv>)
});

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

const MainBlock = styled.div`
left: 0px;
top: 0px;
z-index: 999;
width: 570px;
height: 495px;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 15px;
@media (max-width: 768px) {
    width:90%;
    box-sizing: border-box;
    padding: 0 20px;
}
`
const RecoveryCodeContent = styled.div`
padding-top: 38px;
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
const RecoverySubText = styled.p`
margin-top: 0px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: center;
padding: 0 120px;
@media (max-width: 768px) {
    padding: 0;
}
`