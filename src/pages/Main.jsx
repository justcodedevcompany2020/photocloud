import { ChangeSettingsBlock } from '../components/changeSettingsBlock/ChangeSettingsBlock';
import { FoldersBlock } from '../components/foldersBlock/FoldersBlock';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { MiddleInfo } from '../components/middleInfo/MiddleInfo'
import { SettingsBlock } from '../components/settingsBlock/SettingsBlock';
export const MainPage = () => {
    return (
    <>
        <Header />
        <SettingsBlock/>
        <MiddleInfo/>
        <ChangeSettingsBlock/>
        <FoldersBlock/>
        <Footer/>
    </>
    )
}