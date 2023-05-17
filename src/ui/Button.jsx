import styled from "styled-components"

export const Button = ({
    onClick,
    text,
    bgColor,
    txColor,
    width,
    height,
    mt,
    ml,
    mb,
}) => {
    return (
        <UIbutton onClick={onClick} height={height} mt={mt} ml={ml} bgColor={bgColor} txColor={txColor} width={width} mb={mb}>{text}</UIbutton>
    )
}

export const UIbutton = styled.button`
border: 2px solid #4F6688;
margin-left: ${props => props.ml ? props.ml : '0px'};
margin-bottom: ${props => props.mb ? props.mb : '0px'};
margin-top: ${props => props.mt ? props.mt : '0px'};
background: ${props => props.bgColor ? props.bgColor : 'none'};
border-radius: 8px;
width: ${props => props.width ? props.width : '260px'};
height: ${props => props.height ? props.height : '50px'};
color: ${props => props.txColor ? props.txColor : '#FFFFFF'};
font-family: 'Raleway';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 20px;
cursor: pointer;
`
