import './App.css';
import "./fonts/Raleway-Regular.ttf"
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { NotFound } from './components/notFound/NotFound';
import { MiddleInfo } from './pages/middleInfo/MiddleInfo';
import { FoldersBlock } from './pages/foldersBlock/FoldersBlock';
import { UserProfile } from './pages/userProfile/UserProfile';
import { Settings } from './pages/settings/Settings';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_user } from './store/action/action';
import { FolderPage } from './pages/folderPage';
import { SinglPage } from './pages/singlePage';
import { NoUserFolderBlock } from './pages/NoUserFolder';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(()=>{
    dispatch(get_user(token))
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MiddleInfo />} />
         { <Route path="/createFolder" element={token ?<FoldersBlock />:<NoUserFolderBlock />} />}
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/folder/:id' element={<FolderPage />} />
          <Route path='/img/:id' element={<SinglPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
