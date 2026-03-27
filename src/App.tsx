import { ConfigProvider, Layout, theme } from 'antd'
import { Home } from './pages/Home'
import { AppHeader } from './components/common/AppHeader'
import { useState } from 'react';

const App=()=> {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? darkAlgorithm : defaultAlgorithm,
        token: {
          
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', padding: '0' }}>
        <Layout.Header style={{ padding: '0', fontSize: '24px', fontWeight: 'bold',margin:"0" }}>
          <AppHeader onDarkModeChange={setDarkMode} dark={darkMode} />
        </Layout.Header>
        <Layout.Content ><Home /></Layout.Content>
     <Layout.Footer style={{ textAlign: 'center' }}>Shopping List App ©2026 Created by Zeta</Layout.Footer>
    </Layout>
    </ConfigProvider>
  )
}

export default App
