import './App.css';
import "./fonts/Raleway-Regular.ttf"
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { NotFound } from './components/notFound/NotFound';
import { MiddleInfo } from './pages/middleInfo/MiddleInfo';
import { FoldersBlock } from './pages/foldersBlock/FoldersBlock';
import { UserProfile } from './pages/userProfile/UserProfile';
import { Settings } from './pages/settings/Settings';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_user } from './store/action/action';
import { FolderPage } from './pages/folderPage';
import { SinglPage } from './pages/singlePage';
import { NoUserFolderBlock } from './pages/NoUserFolder';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const [tokens,setTokens] = useState()
  useEffect(()=>{
    dispatch(get_user(token))
    setTokens(token)
  },[token])

  return (
    <div className="App">
      {!tokens ?
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={!tokens ?<MiddleInfo />:<UserProfile />} />
          <Route path="/createFolder" element={tokens ?<FoldersBlock />:<NoUserFolderBlock />} />
          <Route path="*" element={<MiddleInfo />} />
          </Route>
      </Routes>:
      <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route path="/createFolder" element={tokens ?<FoldersBlock />:<NoUserFolderBlock />} />
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/folder/:id' element={<FolderPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      }
    </div>
  );
}

export default App;
