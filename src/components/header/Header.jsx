import styled from "styled-components"
import { ReactComponent as UserIcon } from '../../assets/UserIcon.svg';
import { Button } from "../../ui/Button";
import { Registration } from "../registration/Registration";
import { useRef, useState } from "react";
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

    return (<>
        <HeaderBlock>
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
                        <UserIcon />
                    </UserIconWrapper>
                </UserProfileBlock> : <LoginBlock>
                    <Button onClick={handleLoginToggle} text={'Войти'} txColor={'#4F6688'} width={'230px'} />
                    <Button onClick={handleRegToggle} text={'Зарегистрироваться'} bgColor={'#4F6688'} width={'230px'} ml={'10px'} />
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
border: 1px solid #BEBEBE;
height: 100px;
display: flex;
justify-content: center; /*Центрирование по горизонтали*/
align-items: center;
background: #FFFFFF;
`
const MainBlock = styled.div`
display:flex;
max-width: 1170px;
align-items: center;
width: 100%;
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
`
const UserIconWrapper = styled.div`
cursor: pointer;
`
const LoginBlock = styled.div`

`