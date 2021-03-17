import Editor from '../../components/Editor';
import Layout from '../../components/Layout';
import { Form, Button } from 'react-bootstrap';

const form = () => (
  <Layout>
    <Form.Control size="lg" type="text" placeholder="제목" />
    <Editor onChange={() => {}} valueType="markdown" />
    <div style={{ display: 'flex' }}>
      <Button variant="light" style={{ marginLeft: 'auto' }}>목록</Button>
      <Button type="submit">저장</Button>
    </div>
  </Layout>
)

export default form;