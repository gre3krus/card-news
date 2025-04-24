import { GlobalOutlined, ReadOutlined, UserOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import { IData_SnippetNews } from "../../data/types";

interface NewsProps {
  data: IData_SnippetNews;
}

export const Title: React.FC<NewsProps> = ({ data }) => {
  return (
    <>
      <Typography.Title level={4} style={{ color: "#0284F4" }}>
        {data.TI}
      </Typography.Title>

      <Space size="large">
        <div>
          <GlobalOutlined style={{ fontSize: "18px" }} />{" "}
          <Typography.Link
            href={data.DOM}
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            {data.DOM}
          </Typography.Link>
        </div>
        <div>
          <img src={data.FAV} alt="error FAV" />{" "}
          <Typography.Text strong type="secondary">
            {data.CNTR}
          </Typography.Text>
        </div>
        <div>
          <ReadOutlined style={{ fontSize: "16px" }} />{" "}
          <Typography.Text strong type="secondary">
            {data.LANG.charAt(0).toUpperCase() + data.LANG.slice(1)}
          </Typography.Text>
        </div>
        <div>
          <UserOutlined style={{ fontSize: "16px" }} />{" "}
          <Typography.Text strong type="secondary">
            {data.AU}
          </Typography.Text>
        </div>
      </Space>
    </>
  );
};
