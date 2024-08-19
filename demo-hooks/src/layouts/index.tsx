import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

function LayoutIndex() {
  return (
    <Layout>
      <Sider width="25%"></Sider>

      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutIndex;
