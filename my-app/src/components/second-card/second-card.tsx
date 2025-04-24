import { Card, Space, Typography } from "antd";
import {
  InfoCircleOutlined,
  BorderOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { IData_SnippetNews } from "../../data/types";

interface NewsProps {
  data: IData_SnippetNews;
}

export const SecondCard: React.FC<NewsProps> = ({ data }) => {
  const date = new Date(data.DP);
  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return (
    <Card className="second-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space size="large">
          <Typography.Text type="secondary">
            {day} {month} {year}
          </Typography.Text>
          <Typography.Text>
            {Math.round(data.REACH / 1000)}K Top Reach
          </Typography.Text>
        </Space>
        <Space>
          <InfoCircleOutlined style={{ fontSize: "20px" }} />
          <BorderOutlined style={{ fontSize: "20px" }} />
        </Space>
      </div>
      <Typography.Title level={4} style={{ color: "#0284F4" }}>
        {data.TI}
      </Typography.Title>

      <Space size="large">
        <div>
          <GlobalOutlined style={{ fontSize: "18px" }} />{" "}
          <Typography.Link
            href="ria.ru"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            ria.ru
          </Typography.Link>
        </div>
        <div>
          <img src={data.FAV} alt="error FAV" />{" "}
          <Typography.Text strong type="secondary">
            {data.CNTR}
          </Typography.Text>
        </div>
        <div>
          <UserOutlined style={{ fontSize: "16px" }} />{" "}
          <Typography.Text strong type="secondary">
            {data.AU}
          </Typography.Text>
        </div>
      </Space>
    </Card>
  );
};
