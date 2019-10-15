import React from 'react';
import {
  Row,
  Col,
  Table,
  Divider,
} from 'antd';
import _ from 'lodash';
import { NavLink as Link } from 'react-router-dom';

import ListView from '../common/ListView';
import {basicSub} from '../../Data/Basic.js';
import {cultureSub} from '../../Data/Culture.js';
import {feelingsSub} from '../../Data/Feelings.js';
import {funnySub} from '../../Data/Funny.js';

class Users extends React.Component {

  componentDidMount = () => {
    // this.props.getVpcs();

    console.log(this.props.location,'Userlocation');
  };

 
  
  clickUserName = userName => {
    console.log(userName)
  }

  render() {
    const {
      loading,
      searchLoading,
      hideModal,
      pagination,
      onPaginationChange
    } = this.props;
    // const data = vpcs.vpcs.filter(vpc => _.includes(vpc.name, search));
    let data = [];
    let res = this.props.location.pathname.split("/");
    let subCato = res[2].split("-");
    let subCatoValue = subCato[1];

    if(subCato[0] === 'Basic'){
      if(subCatoValue === 'Barstool' || subCatoValue === 'BasicAll'){
        basicSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.pftcommenter
            };
          data.push(newObj);
        });
    
      } else if(subCatoValue === 'viral'){
        basicSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.alezander
            };
          data.push(newObj);
        });
      }else if(subCatoValue === 'viralpics'){
        basicSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.earthpix
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'viralvids' || subCatoValue === 'vine'){
        basicSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.thefunnyvine
            };
  
          data.push(newObj);
        });
      }
    } else if(subCato[0] === 'Culture'){
      if(subCatoValue === 'bt'){
        cultureSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.quintabrunson
            };
          data.push(newObj);
        });
    
      } else if(subCatoValue === 'celeb'){
        cultureSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.sharonstone
            };
          data.push(newObj);
        });
      }else if(subCatoValue === 'Pop culture'){
        cultureSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.colbertlateshow
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'office'){
        cultureSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.jennafischer
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'entertainmnet' || subCatoValue === 'cultureAll'){
        cultureSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.dumbdrunkpeople
            };
  
          data.push(newObj);
        });
      }
    } else if(subCato[0] === 'Feelings'){
      if(subCatoValue === 'Emotions'){
        feelingsSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.wordstionary
            };
          data.push(newObj);
        });
    
      } else if(subCatoValue === 'zen'){
        feelingsSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.zen_moments
            };
          data.push(newObj);
        });
      }else if(subCatoValue === 'yoga'){
        feelingsSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.yoga_journal
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'organization'){
        feelingsSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.orgjunkie
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'inspirational' || subCatoValue === 'feelingsALL'){
        feelingsSub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.tbdbusiness
            };
  
          data.push(newObj);
        });
      }
    }else if(subCato[0] === 'Funny'){
      if(subCatoValue === 'haha'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.vickibarbolak
            };
          data.push(newObj);
        });
    
      } else if(subCatoValue === 'lol' || subCatoValue === 'humor'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.theonion
            };
          data.push(newObj);
        });
      }else if(subCatoValue === 'memes' || subCatoValue === 'memes2'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.freememeskids
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'dank'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.prequelmemesbot
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'Jokes'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.jennyjohnsonhi5
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'parenting'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.dadandburied
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'very funny'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item.dril
            };
  
          data.push(newObj);
        });
      }else if(subCatoValue === 'funnyAll'){
        funnySub[subCatoValue].forEach( (item, index) => {
          const newObj = {
              id: index,
              name: item._coryrichardson
            };
  
          data.push(newObj);
        });
      }
    }
  

    const allColumns = [
      {
        title: 'ID',
        dataIndex: 'id',
        className: 'clickable'
      },
      {
        title: 'Name',
        dataIndex: 'alias',
        render: (text, record) => (
          <span className="row-actions">
            <Link to={`${subCatoValue}/${record.name}`} activeClassName="selected">
              {text || record.name}
            </Link>
          </span>
        ) 
      },

    ];
    let columns = allColumns;
    // if (device.screen === 'xs') {
    //   columns = allColumns.slice(0, 2);
    // }

    const notTabletOrPhoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading || searchLoading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );
    const phoneTable = (
      <Table
        size="middle"
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={onPaginationChange}
        pagination={pagination}
      />
    );

    let table = notTabletOrPhoneTable;

    return (
      <Row
        type="flex"
        justify="center"
        className="page list-view vpc-list-view"
      >
        <Col xs={24} xl={18}>
          <Row type="flex" justify="space-between" className="page-header">
            <h2 className="heading">{res[2]}</h2>
          </Row>
          <Divider />
        </Col>
        <Col xs={24} xl={18}>
          {table}
        </Col>
      </Row>
    );
  }
}


export default ListView(Users)
