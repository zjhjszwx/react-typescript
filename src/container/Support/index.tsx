import React, { useState, useEffect } from 'react';
import './index.css';
import { request } from '../../utils';
import { Table, Button, Tooltip } from 'antd';
import { List, Result, Logo } from './interface.d';
function Support() {
  const [dataSource, setDataSource] = useState<List>([]);
  useEffect(() => {
    (async () => {
      let res: Result<List> = await request('./mock/support.json');
      setDataSource(res.result);
    })();
  }, []);

  const columns = [
    {
      title: '编号',
      key: 'index',
      width: 50,
      fixed: 'left',
      align: 'center',
      dataIndex: 'index',
      render: (val: number) => <span className="blue-id">{val}</span>
    },
    {
      title: '公司名称',
      key: 'name',
      fixed: 'left',
      width: 200,
      dataIndex: 'name'
    },
    {
      title: '公司logo',
      key: 'logo',
      width: 100,
      dataIndex: 'logo',
      render: (val: Logo) =>
        val.logo ? (
          <Tooltip key={val.id} title={<img style={{ width: 200, height: 200 }} src={val.logo} alt="图片不见了" />}>
            <img style={{ width: 31, height: 31 }} src={val.logo} alt="图片不见了" />
          </Tooltip>
        ) : (
          ''
        )
    },
    {
      title: '公司二维码',
      key: 'qrcode',
      width: 100,
      dataIndex: 'qrcode',
      render: (val: any) =>
        val.qrcode ? (
          <Tooltip key={val.id} title={<img style={{ width: 200, height: 200 }} src={val.qrcode} alt="图片不见了" />}>
            <img style={{ width: 31, height: 31 }} src={val.qrcode} alt="图片不见了" />
          </Tooltip>
        ) : (
          ''
        )
    },
    {
      title: '公司地址',
      key: 'address',
      width: 200,
      dataIndex: 'address',
      ellipsis: true
    },
    {
      title: '父公司',
      key: 'company',
      width: 200,
      dataIndex: 'company',

      render: (val: any) => <span>{val ? val.name : ''}</span>
    },
    {
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      dataIndex: 'action',
      render: (text: any, record: any) => (
        <span>
          <Button type="link" onClick={() => updateBtn(record)}>
            修改
          </Button>
        </span>
      )
    }
  ];

  const updateBtn = (record: List) => {
    console.log(record);
  };
  return (
    <div className="qe">
      <Table size="middle" dataSource={dataSource} columns={columns as []} rowKey={(row: any) => row.id} />
    </div>
  );
}

export default Support;
