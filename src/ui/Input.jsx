import styled from "styled-components"

export const Input = ({
    inputName,
    width,
    value,
    onChange,
    error,
    max,
}) => {
    return (
        <UIInput max = {max} error = {error}  onChange ={(e)=>onChange ?onChange(e.target.value):{}} value = {value} width = {width} type="text" placeholder={inputName} />
    )
}

export const UIInput = styled.input`
width: ${props => props.width ? props.width : '350px'};
max-width: ${props => props.max ? props.max : '350px'};
padding:15px 20px;
margin: 12px 0;
box-sizing: border-box;
border: ${props =>props.error ? '1px solid red':'1px solid #BEBEBE'} ;
border-radius: 8px;
color: black;
::-webkit-input-placeholder {
    color: black;
  }
@media (max-width: 768px) {
    max-width:350;
    width:100%;
}
`
