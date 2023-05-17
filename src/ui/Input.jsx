import styled from "styled-components"

export const Input = ({
    inputName
}) => {
    return (
        <UIInput type="text" placeholder={inputName} />
    )
}

export const UIInput = styled.input`
width: 350px;
padding:15px 20px;
margin: 12px 0;
box-sizing: border-box;
border: 1px solid #BEBEBE;
border-radius: 8px;
color: #333333;
`