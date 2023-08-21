import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, InputNumber, Upload, message } from  'antd'
import { InboxOutlined } from '@ant-design/icons';
import { registerUserApi } from '../http/user';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export default function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Success:', values);
    await registerUserApi(values);
    navigate('/list');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formStyle = {
    width: '50%',
    margin: '0 auto',
    border: '1px solid #f5f5f5',
    background: '#fafafa',
    borderRadius: '1rem',
    padding: 24,
  };

  return (
    <div style={formStyle}>
      <h2>Register</h2>
      <Form
        name="register"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="Age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <InputNumber min={1} max={100} />
        </Form.Item>
        <Form.Item
          label="File"
          name="file"
          rules={[
            {
              required: true,
              message: 'Please upload file!',
            },
          ]}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Dragger>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}


