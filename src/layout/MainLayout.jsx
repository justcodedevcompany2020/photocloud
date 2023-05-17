import { Outlet } from 'react-router-dom';
import { ChangeSettingsBlock } from '../components/changeSettingsBlock/ChangeSettingsBlock';
import { FoldersBlock } from '../pages/foldersBlock/FoldersBlock';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { MiddleInfo } from '../pages/middleInfo/MiddleInfo'
import { SettingsBlock } from '../components/settingsBlock/SettingsBlock';
export const MainLayout = () => {
    return (
    <>
        <Header />
        {/* <SettingsBlock/> */}
        <Outlet/>
        {/* <ChangeSettingsBlock/>
        <FoldersBlock/> */}
        {/* <Footer/> */}
    </>
    )
}