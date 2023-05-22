import styled from "styled-components"
import { ReactComponent as PlusIcon } from "../../assets/plus.svg"
import { CreateFolderForm } from "../../components/createFolderForm/CreateFolderForm"
import { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "../../hooks/useOnClickOutside"
import { useSelector } from "react-redux"
import { ReactComponent as Img } from "../../assets/img.svg"
import { useNavigate } from "react-router-dom"

export const FoldersBlock = () => {
    const [createFolderModal, setCreateFolderModal] = useState()
    const {creatFolder} = useSelector((st)=>st)
    const folderRef = useRef()
    const navigate = useNavigate()
    useOnClickOutside(folderRef, () => setCreateFolderModal(false));
    useEffect(()=>{
        if(creatFolder.status){
            setCreateFolderModal(false)
        }
    },[creatFolder.status])
    return (<>
        <MainBlock>
            <Content>
                <AddCardsWrapper>
                    <AddCards onClick={() => setCreateFolderModal(!createFolderModal)}>
                        <PlusIconWrapper>
                            <PlusIcon />
                        </PlusIconWrapper>
                    </AddCards>
                    <Text>Добавить папку</Text>
                </AddCardsWrapper>
                {creatFolder.folder?.map((elm,i)=>{
                    return <Card onClick={()=>{navigate(`/folder/${elm.slug}`)}}>
                        <Main></Main>
                        <MainText>
                            <Title>
                                {elm.name}
                            </Title>
                            <Count>
                                <p style={{margin:'0 5px'}}>0</p> <Img />
                            </Count>
                        </MainText>
                    </Card>
                })

                }
            </Content>
        </MainBlock>
        {createFolderModal && <CreateFolderForm loading = {creatFolder.loading} ref={folderRef} />}
    </>
    )
}

const MainBlock = styled.div`
max-width: 1170px;
min-height: 720px;
width: 95%;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
// height: 100px;
margin: auto;
margin-top: 25px;
margin-top: 0;
`
const AddCardsWrapper = styled.div`
width: 220px;
height: 270px;
margin: 0 10px;

// display:flex;

`
const Content = styled.div`
// margin: 15px;
height: 100%;
padding:20px 0px;
display: flex;
flex-wrap: wrap;
// justify-content: space-between;
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
const Card = styled.div`
width: 220px;
margin: 0 10px;
height: 270px;
border-radius: 10px;
position: relative;
cursor: pointer;
`
const Main = styled.div `
width: 220px;
height: 220px;
border-radius: 10px;
position: relative;
cursor: pointer;
background: rgb(79, 102, 136);
`
const MainText = styled.div `
width: 220px;
height: 50px;
display: flex;
justify-content: space-between;

`
const Title = styled.p `
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 21px;
color: #333333;
`
const Count = styled.p`
display: flex;
align-items: center;
color:#4F6688
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: right;
font-feature-settings: 'pnum' on, 'lnum' on;
`