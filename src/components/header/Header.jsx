import styled from "styled-components"
import { ReactComponent as UserIcon } from '../../assets/UserIcon.svg';
import { ReactComponent as UsericoneMobil } from '../../assets/UsericoneMobil.svg';
import { ReactComponent as settings } from '../../assets/settings.svg';


import { Button } from "../../ui/Button";
import { Registration } from "../registration/Registration";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Login } from "../login/Login";
import { PasswordRecovery } from "../passwordRecovery/PasswordRecovery";
import { RecoveryCode } from "../recoveryCode/RecoveryCode";
import { PasswordRecoveryForm } from "../passwordRecoveryForm/PasswordRecoveryForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register_action } from "../../store/action/action";

export const Header = () => {
    const [regToggle, setRegToggle] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)
    const [recoveryToggle, setRecoveryToggle] = useState(false)
    const [recoveryPasswordFormToggle, setRecoveryPasswordFormToggle] = useState(false)
    const [recoveryPasswordForm, setRecoveryPasswordForm] = useState(false)


    let { pathname } = useLocation();
    const dispatch = useDispatch()
    const refReg = useRef();
    const logRef = useRef();
    const recRef = useRef();
    const recpasfor = useRef()
    const recpasref = useRef()
    const navigate = useNavigate();
    const [registerData,setRegisterData] = useState([])
    const {reg} = useSelector(st=>st)
    useOnClickOutside(refReg, () => setRegToggle(false));
    useOnClickOutside(logRef, () => setLoginToggle(false));
    useOnClickOutside(recRef, () => setRecoveryToggle(false));
    useOnClickOutside(recpasfor, () => setRecoveryPasswordFormToggle(false));
    useOnClickOutside(recpasref, () => setRecoveryPasswordForm(false));


    // useOnClickOutside(recpasfor, () => setRecoveryPasswordFormToggle(false));

    const handleRegToggle = () => {
        setRegToggle(!regToggle)
    }

    const handleLoginToggle = () => {
        setLoginToggle(!loginToggle)
    }

    const handleForgotModal = () => {
        setLoginToggle(!loginToggle)
        setRecoveryToggle(!recoveryToggle)
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    const handleLoginClick = (item) => {
    //     let temp =[...item]
    //     temp.map((elm,i)=>{
    //         if(elm.lable === 'Имя'){
    //             if(elm.value === ''){
    //                 elm.error = 'Email is invalid' 
    //             }
    //             else {
    //                 elm.error = '' 
    //             }
    //         }
    //         if(elm.lable === 'Эл. почта'){
    //             if(!isValidEmail(elm.value)){
    //                 elm.error = 'Email is invalid' 
    //             }
    //             else {
    //                 elm.error = ''
    //             }
    //         }
    //         if(elm.lable === 'Пароль'){
    //             if(elm.value.length<=7){
    //                 elm.error = '88'
    //             }
    //             else if(elm.value === ''){
    //                 elm.error = 'password is empty'
    //             }
    //             else {
    //                 elm.error = ''
    //             }
    //         }
    //         if(elm.lable === 'Юзернейм'){
    //             if(elm.value === ''){
    //                 elm.error = 'Username is empty'
    //             }
    //             else {
    //                 elm.error = ''
    //             }
    //         }
    //         if(elm.lable === 'Повтор пароля'){
    //             if(elm.value !== temp[3].value || elm.value ===''){
    //                 elm.error = 'password'
    //             }
    //             else {
    //                 elm.error = ''
    //             }
    //         }
            
       
    //     })
    //     let error = true
    //     temp.map((elm,i)=>{                
    //         if(elm.error){
    //             error = false
    //         }
    // })
    // if(error){
    //     dispatch(register_action({
    //         name:temp[0].value,
    //         username:temp[1].value,
    //         email:temp[2].value,
    //         password:temp[3].value,
    //         password_confirmation:temp[4].value
    //     }))
    // }
    //     setRegisterData(temp)
        setRegToggle(!regToggle)
        setLoginToggle(false)
        dispatch(register_action())
        navigate('userProfile')
    }

    const handleRegFromLogin = () => {
        setLoginToggle(false)
        setRegToggle(true)
    }
    const handelRecoveryForm = () =>{
        setRecoveryToggle(false)
        setRecoveryPasswordFormToggle(true)
    }
    const handleCloseLoginModal = () => {
        setLoginToggle(false)
        setRegToggle(false)
    }
    const handelRecoveryPassForm = () =>{
        setRecoveryPasswordFormToggle(false)
        setRecoveryPasswordForm(true)
    }
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
    //   useEffect(()=>{
    //     console.log('pp')
    //     if(reg.status){
    //         setLoginToggle(false)
    //         setRegToggle(false)
    //         navigate('userProfile')

    //     }
    // },[reg.status])
    useEffect(()=>{
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    },[])
    return (<>
        <HeaderBlock >
            <MainBlock>
                <LogoBlock>
                    <Link style={{ textDecoration: 'none' }} to={'/userProfile'}><LogoTitle>
                        PhotoHosting
                    </LogoTitle></Link>
                </LogoBlock>
                {pathname === '/userProfile' ? <UserProfileBlock>
                    <UserName>
                        AccountName
                    </UserName>
                    <UserIconWrapper>
                        {windowSize[0] >= 768 ? <UserIcon /> : <UsericoneMobil />}
                    </UserIconWrapper>
                </UserProfileBlock> : <LoginBlock>
                    <ButtonWrapperLogin><Button onClick={handleLoginToggle} text={'Войти'} txColor={'#4F6688'} width={'230px'}  /></ButtonWrapperLogin>

                    <ButtonWrapperMobile><Button onClick={handleLoginToggle} text={'Войти'} txColor={'#4F6688'} width={'100px'} height ={'35px'} font = {'14px'} /></ButtonWrapperMobile>
                    <ButtonWrapper><Button onClick={handleRegToggle} text={'Зарегистрироваться'} bgColor={'#4F6688'} width={'230px'} ml={'10px'} /></ButtonWrapper>
                   
                </LoginBlock>}
            </MainBlock>
        </HeaderBlock>
        {regToggle && <Registration registerData = {registerData} ref={refReg} loginBtnCB={(e)=>handleLoginClick(e)} />}
        {loginToggle && <Login ref={logRef} forgotPassCB={handleForgotModal} regCB={handleRegFromLogin} loginCloseCB={handleCloseLoginModal}  />}
        {recoveryToggle && <PasswordRecovery handelRecoveryForm = {handelRecoveryForm} ref={recRef}  />}
        {recoveryPasswordFormToggle  && <RecoveryCode onClick = {handelRecoveryPassForm} ref = {recpasfor} />}
        {recoveryPasswordForm && <PasswordRecoveryForm onClick = {()=>setRecoveryPasswordForm(false)} ref = {recpasref}/>}
    </>
    )
}

const HeaderBlock = styled.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
background: #FFFFFF;
border-bottom: 1px solid #BEBEBE;
@media (max-width: 768px) {
    height: 60px;
  }
`
const MainBlock = styled.div`
display:flex;
max-width: 1170px;
align-items: center;
width: 95%;
justify-content: space-between;
`
const LogoBlock = styled.div`

`
const LogoTitle = styled.span`
text-decoration: none;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 35px;
color: #4F6688;
cursor: pointer;
@media (max-width: 768px) {
    font-size: 20px;
  }
`
const UserProfileBlock = styled.div`
display: flex;
align-items: center;
`
const UserName = styled.span`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
text-align: right;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #333333;
margin-right: 13px;
cursor: pointer;
display:block;
@media (max-width: 768px) {
    display: none;
  }

`
const UserIconWrapper = styled.div`
cursor: pointer;
`

const LoginBlock = styled.div`
display: flex;
`
const ButtonWrapper = styled.div `
@media (max-width: 768px) {
    display: none;
  }
`
const ButtonWrapperMobile = styled.div`
display: none;
@media (max-width: 768px) {
    display: block;
  }
`
const ButtonWrapperLogin = styled.div `
display: block;
@media (max-width: 768px) {
    display: none;
  }
`