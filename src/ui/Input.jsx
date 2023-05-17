import styled from "styled-components"

export const Input = ({
    inputName,
    width,
}) => {
    return (
        <UIInput width = {width} type="text" placeholder={inputName} />
    )
}

export const UIInput = styled.input`
width: ${props => props.width ? props.width : '350px'};
max-width:350px;
padding:15px 20px;
margin: 12px 0;
box-sizing: border-box;
border: 1px solid #BEBEBE;
border-radius: 8px;
color: #333333;
`