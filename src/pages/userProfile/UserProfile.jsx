import { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { SettingsBlock } from "../../components/settingsBlock/SettingsBlock"
import { get_all_folder } from "../../store/action/action"
import { FoldersBlock } from "../foldersBlock/FoldersBlock"

export const UserProfile = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_all_folder())
    },[])
    return (
        <>
        <SettingsBlock/>
        <Title>Папки</Title>
        <FoldersBlock/>
        </>
    )
}
const Title = styled.p `
    text-align: left;
    max-width: 1170px;
    width: 95%;
    margin: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    color: #333333;
    margin: 20px auto;
`