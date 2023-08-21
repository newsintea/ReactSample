import { useEffect, useState } from 'react';
import { getUsersApi } from '../http/user';
import { Table } from 'antd';

function List() {
  const [users, setUsers] = useState();

  useEffect( () => {
    (async() => {
      const response = await getUsersApi();
      console.log(response.data.body)
      setUsers(response.data.body);
    })()
  },[])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <h2>User List</h2>
      <Table
        columns={columns}
        dataSource={users}
        pagination={false}
      />
    </div>
  );
}

export default List;

