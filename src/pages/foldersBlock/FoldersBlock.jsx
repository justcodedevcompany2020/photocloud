import styled from "styled-components"
import { ReactComponent as PlusIcon } from "../../assets/plus.svg"
import { CreateFolderForm } from "../../components/createFolderForm/CreateFolderForm"
import { useRef, useState } from "react"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"

export const FoldersBlock = () => {
    const [createFolderModal, setCreateFolderModal] = useState()
    const folderRef = useRef()
    useOnClickOutside(folderRef, () => setCreateFolderModal(false));
    return (<>
        <MainBlock>
            <Content>
                <AddCards onClick={() => setCreateFolderModal(!createFolderModal)}>
                    <PlusIconWrapper>
                        <PlusIcon />
                    </PlusIconWrapper>
                </AddCards>
                <Text>Добавить папку</Text>
            </Content>
        </MainBlock>
        {createFolderModal && <CreateFolderForm ref={folderRef} />}
    </>
    )
}

const MainBlock = styled.div`
display:flex;
max-width: 1170px;
min-height: 720px;
width: 95%;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
height: 100px;
margin: auto;
margin-top: 25px;
margin-top: 0;
`
const Content = styled.div`
margin: 15px;
height: 100%;
@media (max-width: 768px) {
    margin: 15px auto;
  }
`
const AddCards = styled.div`
width: 220px;
height: 220px;
background: #4F6688;
border-radius: 10px;
position: relative;
cursor: pointer;
`
const PlusIconWrapper = styled.div`
position: absolute;
top: 35%;
left: 37%;
`
const Text = styled.p `
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
text-align: center;
`