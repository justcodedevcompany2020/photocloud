import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { Footer } from "../../components/footer/Footer"
import { get_photo_by_slug } from "../../store/action/action"

export const SinglPage = () =>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const {addPhoto} = useSelector((st)=>st)
    console.log(addPhoto)
    useEffect(()=>{
        dispatch(get_photo_by_slug(id))
    },[])
    return (<>
        <MainBlock>
            <Image src={`https://photocloud.justcode.am/uploads/${addPhoto.photo && addPhoto.photo}`} />
        </MainBlock>
        <Footer></Footer>
    </>
    )
}

const MainBlock = styled.div`
display:flex;
max-width: 1170px;
min-height: 520px;
width: 95%;
background: #FFFFFF;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.1);
border-radius: 10px;
height: 100px;
margin: auto;
align-items: center;
justify-content: center;
margin-top: 25px;
`
const Image = styled.img `
width: 60%;
height: 90%;
object-fit: cover;
border-radius: 8px;
`