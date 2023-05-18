import styled from "styled-components"
import { Button } from "../../ui/Button"
import { ReactComponent as LogoutIcon } from '../../assets/logout.svg';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";

export const SettingsBlock = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
      const navigate = useNavigate();
    useEffect(()=>{
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    },[])
    const {reg} = useSelector((st)=>st)
    return (
        <MainBlock>
            <ContentBlock>
                <UserBlock>
                    <UserName>
                        {reg.user.username}
                    </UserName>
                    <LogoutWrapper>
                        <IconWrapper>
                            <LogoutIcon />
                        </IconWrapper>
                        <Link to={'/'}>
                            <LogoutText>
                                Выйти
                            </LogoutText>
                        </Link>
                    </LogoutWrapper>
                </UserBlock>
                <SettingsDiv>
                    {windowSize[0]<=768 ? <Settings onClick = {()=>navigate("/settings")} />:
                        <ButtonWrapper>
                            <Button onClick = {()=>navigate("/settings")} text={'Настройки'} txColor={'#4F6688'} mb={'0px'} width={'230px'} />
                        </ButtonWrapper>
                    }
                </SettingsDiv>
            </ContentBlock>
        </MainBlock>
    )
}

const MainBlock = styled.div`
display:flex;
max-width: 1170px;
align-items: center;
width: 95%;
justify-content: space-between;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
height: 100px;
margin: auto;
margin-top: 25px;
`
const ContentBlock = styled.div`
margin: 15px 20px;
width: 100%;
display: flex;
justify-content: space-between;
`
const UserBlock = styled.div`

`

const UserName = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
color: #333333;
cursor: pointer;
margin-top: 0px;
margin-bottom: 16px;
@media (max-width: 768px) {
    font-size: 16px;
  }
`
const LogoutText = styled.span`
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #333333;
cursor: pointer;
`
const ButtonWrapper = styled.div`
vertical-align: middle;
display: table-cell;
`

const SettingsDiv = styled.div`
display: table;
`
const IconWrapper = styled.div`
margin-right: 7px;
cursor: pointer;
`
const LogoutWrapper = styled.div`
display:flex;
`