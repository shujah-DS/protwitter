// import React, { Component } from 'react';
// import { NavLink as Link } from 'react-router-dom';
// import { Menu, Row, Col, Drawer, Icon } from 'antd';
// import { connectComponent } from '../../modules/utils';
// import {
//   HOME,
//   LOGOUT,
//   CONFIGURATIONS,
//   COMPANY_NAME,
//   MANAGE_USERS,
//   MANAGE_RESOURCES,
//   MANAGE_REGIONS,
//   MANAGE_VPCS,
//   MANAGE_AMIS,
//   MANAGE_EC2_TYPES,
//   USER_RESOURCES
// } from '../../constants';

// const { SubMenu } = Menu;

// class Navbar extends Component {
//   state = { visible: false, openKeys: [] };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible
//       // openKeys: prevState.openKeys.length > 0 ? [] : prevState.openKeys
//     }));
//   };

//   render() {
//     const { visible, openKeys } = this.state;
//     const { path } = this.props;
//     const mode = visible ? 'inline' : 'horizontal';
//     const menu = (
//       <Menu
//         theme="dark"
//         mode={mode}
//         selectedKeys={[path]}
//         style={{ lineHeight: '64px' }}
//         openKeys={openKeys}
//         onOpenChange={openkeys => this.setState({ openKeys: openkeys })}
//       >
//         <Menu.Item key="/">
//           <Link to="/" exact>
//             {HOME}
//           </Link>
//         </Menu.Item>
//         <SubMenu
//           title={<span>{CONFIGURATIONS}</span>}
//           key="resources"
//           onMouseLeave={() =>
//             this.setState(prevState => ({
//               openKeys: prevState.openKeys.filter(k => k !== 'resources')
//             }))
//           }
//         >
//           <Menu.Item key="manage-resources">
//             <Link to="/resources" activeClassName="selected">
//               {MANAGE_RESOURCES}
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="manage-users">
//             <Link to="/users" activeClassName="selected">
//               {MANAGE_USERS}
//             </Link>
//           </Menu.Item>

//           <Menu.Item key="manage-regions">
//             <Link to="/regions" activeClassName="selected">
//               {MANAGE_REGIONS}
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="manage-vpcs">
//             <Link to="/vpcs" activeClassName="selected">
//               {MANAGE_VPCS}
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="manage-amis">
//             <Link to="/amis" activeClassName="selected">
//               {MANAGE_AMIS}
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="manage-ec2-types">
//             <Link to="/types" activeClassName="selected">
//               {MANAGE_EC2_TYPES}
//             </Link>
//           </Menu.Item>
//         </SubMenu>
//         <Menu.Item key="/user-resources">
//           <Link to="/user-resources" exact>
//             {USER_RESOURCES}
//           </Link>

//         </Menu.Item>
//         <Menu.Item key="/logout" onClick={this.props.logout}>
//           {LOGOUT}
//         </Menu.Item>
//       </Menu>
//     );

//     return (
//       <Row className="navbar">
//         <Col xs={24} md={8}>
//           <Row type="flex" justify="space-between">
//             <span className="logo"><a href="/">{COMPANY_NAME}</a></span>
//             <Icon
//               className="menu-icon"
//               type={visible ? 'menu-unfold' : 'menu-fold'}
//               size="large"
//               onClick={this.toggle}
//             />
//           </Row>
//         </Col>
//         <Col md={16} className="menu">
//           {menu}
//         </Col>
//         <Drawer
//           className="menu-drawer"
//           title={(
//             <Icon
//               className="menu-icon"
//               type="menu-unfold"
//               size="large"
//               onClick={this.toggle}
//             />
//           )}
//           placement="right"
//           closable={false}
//           onClose={this.onClose}
//           visible={this.state.visible}
//         >
//           {menu}
//         </Drawer>
//       </Row>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   path: state.router.location.pathname
// });

// export default connectComponent(mapStateToProps, {}, Navbar);
