import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { ChangePasswordForm } from "../../components/changePasswordForm/ChangePasswordForm"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux"
import { change_username_and_name } from "../../store/action/action"

export const Settings = () =>{
    const [changePasswordToggle, setChangePasswordToggle] = useState(false)
    const refReg = useRef()
    useOnClickOutside(refReg, () => closeChangePassword());
    const {reg} = useSelector((st)=>st)
    const {changeData} = useSelector(st=>st)
    const dispatch = useDispatch()
    const [data,setData] = useState([
        {value:'',lable:'Имя',error:''},
        {value:'',lable:'Юзернейм',error:''},
        {value:'',lable:'Эл. почта',error:''},
    ])
    const[prevData,setPrevData] = useState([
        {value:'',lable:'Имя',error:''},
        {value:'',lable:'Юзернейм',error:''},
        {value:'',lable:'Эл. почта',error:''},
    ])
    const [chnagePassword,setChnagePassword] = useState([
        {value:'',lable:'Старый пароль',error:''},
        {value:'',lable:'Новый пароль',error:''},
        {value:'',lable:'Повтор пароля',error:''},
    ])
    const closeChangePassword = () =>{
        setChnagePassword([
        {value:'',lable:'Старый пароль',error:''},
        {value:'',lable:'Новый пароль',error:''},
        {value:'',lable:'Повтор пароля',error:''},
        ])
        setChangePasswordToggle(false)
    }
    const handelClick = (value) =>{
        let item = [...value]
        if(item[0].value === ''){
            item[0].error = true
        }
        else {
            item[0].error = false
        }
        if((item[1].value !== item[2].value) || item[1].value === ''||item[2].value === '' ||item[1].value.length<8|| item[2].value.length<8 ){
            item[1].error = true
            item[2].error = true
        }
        else {
            item[1].error = false
            item[2].error = false
        }
        setChnagePassword(item)
        // setChangePasswordToggle(false)
    }
    useEffect(()=>{
        let item = [...data]
        let item2 = [...prevData]
        item[0].value = reg.user.name
        item[1].value = reg.user.username
        item[2].value = reg.user.email
        item2[0].value = reg.user.name
        item2[1].value = reg.user.username
        item2[2].value = reg.user.email
        setData(item)
        setPrevData(item2)
    },[reg.user])
    const hadnelClick = (e,i) =>{
        let item =[...data]
        item[i].value =  e
        setData(item)
    }
    const handelClickSave = () =>{
        let send = false
        let item = [...data]
        if(item[0].value !==prevData[0].value || item[1].value !== prevData[1].value){
            if(item[0].value === ''){
                send = false
                item[0].error = true
            }
            else {
                item[0].error = false
            }
            if(item[1].value === ''){
                send = false
                item[1].error = true
            }
            else {
                item[1].error = false
            }
            if(item[0].value !=='' && item[1].value !==''){
                send = true
            }
            setData(item)
        }
        if(send){
            dispatch(change_username_and_name({name:data[0].value,username:data[1].value}))
        }
    }
    return <>
        <MainBlock>
            <Block>
                <Content>
                    <InputWrapper>  
                        <Lable>Имя</Lable>
                        <Input error={data[0].error} value={data[0].value} onChange ={(e)=>hadnelClick(e,0)} width={'500px'} max={'500px'} inputName={'Имя'} />
                    </InputWrapper>
                    <InputWrapper>
                        <Lable>Юзернейм</Lable>
                        <Input error={data[1].error} value={data[1].value} onChange ={(e)=>hadnelClick(e,1)}  width={'500px'} max={'500px'} inputName={'Username'} />
                    </InputWrapper>
                    <InputWrapper>
                        <Lable>Эл. почта</Lable>
                        <Input error={data[2].error} value={data[2].value} onChange ={(e)=>hadnelClick(e,2)} width={'500px'} max={'500px'} inputName={'User@gmail.com'} />
                    </InputWrapper>
                    <TextMobile onClick={()=>setChangePasswordToggle(true)}>Сменить пароль</TextMobile>
                    <Br />
                    <ButtonWrapper>
                        <Button loading = {changeData.loading} onClick={(e)=>handelClickSave(e)}  text={'Сохранить'} bgColor={'#4F6688'} width={'230px'} ml={'10px'} />
                        <Text onClick={()=>setChangePasswordToggle(true)}>Сменить пароль</Text>
                    </ButtonWrapper>
                </Content>
            </Block>
        </MainBlock>
        {changePasswordToggle && <ChangePasswordForm changeData = {chnagePassword} handelClick = {(data)=>handelClick(data)} ref = {refReg} />}
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
cursor: pointer;
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
    cursor: pointer;
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