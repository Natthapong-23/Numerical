  import React, {  useState } from 'react';
  import { Layout, Menu, Icon } from 'antd';
  import './App.css';
  import Bisection from './root/Bisection';
  import False from './root/Falseposition';
  import Home from './home.js'
  import Secant from './root/Secant';
  import OnePoint from './root/Onepoint';
  import Newton from './root/Newtonrapshon';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

  function App(){
 const [collapsed, setCollapsed] = useState(false);
 const onCollapse = () => setCollapsed (!collapsed);
 const [page, setpage] = useState();
 const bisectionpage = () => setpage(<Bisection />)
 const falseonpage = () => setpage(<False />)
 const newtonpage = () => setpage(<Newton/>)
 const OnePointpage = () => setpage(<OnePoint />)
 const Secantpage = () => setpage(<Secant />)
  const homepage = () => setpage(<Home />)
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ background: '#ffff80', padding: 0 }}> 
            <div className="App" />
            <Menu theme="Dark" defaultSelectedKeys={['1']} mode="inline"style={{ background: '#ffff80', padding: 0 }}>
            <Menu.Item onClick={homepage}>
                <Icon type="home" />
                <span>Home</span>
              </Menu.Item>
            <SubMenu
                key="M1"
                title={
                  <span>
                    <span>Root Equations</span>
                  </span>
                }
              >
                <Menu.Item  onClick={bisectionpage} >Bisection Method</Menu.Item>
                <Menu.Item  onClick={falseonpage}>False-Position Method</Menu.Item>
                <Menu.Item  onClick={newtonpage}>Newtonrapshon Method</Menu.Item>
                <Menu.Item  onClick={OnePointpage}>OnePoint Method</Menu.Item>
                <Menu.Item  onClick={Secantpage}>Secant Method</Menu.Item>
              </SubMenu>
              
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <span>Linear Equations</span>
                  </span>
                }
              >
                <Menu.Item >Cramer's Rule</Menu.Item>
                <Menu.Item >Gauss Eliminaation Method</Menu.Item>
                <Menu.Item >Gauss-Jordan Method</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <span>Differentiation</span>
                  </span>
                }
              >
                <Menu.Item >Forwardh</Menu.Item>
                <Menu.Item >Forwardh2</Menu.Item>
                <Menu.Item >Backwardh</Menu.Item>
                <Menu.Item >Backwardh2</Menu.Item>
                <Menu.Item >Cantralh</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ background: '#ffff80', padding: 0 }}>
            <Header style={{ background: '#ffff80', padding: 0 }}>
              <center><h2>Numerical Method</h2></center></Header>
            <Content style={{ margin: '0 16px' }}style={{ background: '#ffff80', padding: 0 }}>
              {page}
            </Content>
          </Layout>

        </Layout>
        
      );
    
  }

  export default App;
