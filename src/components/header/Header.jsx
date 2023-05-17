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
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const [regToggle, setRegToggle] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)
    const [recoveryToggle, setRecoveryToggle] = useState(false)
    let { pathname } = useLocation();

    const refReg = useRef();
    const logRef = useRef();
    const recRef = useRef();

    useOnClickOutside(refReg, () => setRegToggle(false));
    useOnClickOutside(logRef, () => setLoginToggle(false));
    useOnClickOutside(recRef, () => setRecoveryToggle(false));
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

    const handleLoginClick = () => {
        setRegToggle(!regToggle)
        setLoginToggle(false)
    }

    const handleRegFromLogin = () => {
        setLoginToggle(false)
        setRegToggle(true)
    }

    const handleCloseLoginModal = () => {
        setLoginToggle(false)
        setRegToggle(false)
    }
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
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
                        {windowSize[0] >= 425 ? <UserIcon /> : <UsericoneMobil />}
                    </UserIconWrapper>
                </UserProfileBlock> : <LoginBlock>
                    <ButtonWrapperLogin><Button onClick={handleLoginToggle} text={'Войти'} txColor={'#4F6688'} width={'230px'}  /></ButtonWrapperLogin>

                    <ButtonWrapperMobile><Button onClick={handleLoginToggle} text={'Войти'} txColor={'#4F6688'} width={'100px'} height ={'35px'} font = {'14px'} /></ButtonWrapperMobile>
                    <ButtonWrapper><Button onClick={handleRegToggle} text={'Зарегистрироваться'} bgColor={'#4F6688'} width={'230px'} ml={'10px'} /></ButtonWrapper>
                   

                </LoginBlock>}
            </MainBlock>
        </HeaderBlock>
        {regToggle && <Registration ref={refReg} loginBtnCB={handleLoginClick} />}
        {loginToggle && <Login ref={logRef} forgotPassCB={handleForgotModal} regCB={handleRegFromLogin} loginCloseCB={handleCloseLoginModal} />}
        {recoveryToggle && <PasswordRecovery ref={recRef} />}
        {/* <RecoveryCode/> */}
        {/* <PasswordRecoveryForm/> */}
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
@media (max-width: 425px) {
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
@media (max-width: 425px) {
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
@media (max-width: 425px) {
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
@media (max-width: 425px) {
    display: none;
  }
`
const ButtonWrapperMobile = styled.div`
display: none;
@media (max-width: 425px) {
    display: block;
  }
`
const ButtonWrapperLogin = styled.div `
display: block;
@media (max-width: 425px) {
    display: none;
  }
`