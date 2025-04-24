import React from "react";
import { IData_SnippetNews } from "../../data/types";
import { useFormattedTraffic } from "../../hooks/useFormattedTraffic";
import { Space, Typography, Tag } from "antd";
import { InfoCircleOutlined, BorderOutlined } from "@ant-design/icons";

interface NewsProps {
  data: IData_SnippetNews;
}

export const Header: React.FC<NewsProps> = ({ data }) => {
  const topTraffic = useFormattedTraffic(data.TRAFFIC);
  const date = new Date(data.DP);
  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return (
    <>
      <Space size="large">
        <div>
          <Typography.Text>{day} </Typography.Text>
          <Typography.Text type="secondary">
            {month} {year}
          </Typography.Text>
        </div>

        <div>
          <Typography.Text>{Math.round(data.REACH / 1000)}K </Typography.Text>
          <Typography.Text type="secondary">Reach</Typography.Text>
        </div>

        <div>
          <Typography.Text type="secondary">Top Traffic: </Typography.Text>
          {topTraffic.map((item, index) => (
            <React.Fragment key={index}>
              <Typography.Text type="secondary">
                {item.country}{" "}
              </Typography.Text>
              <Typography.Text>{item.percent}% </Typography.Text>
            </React.Fragment>
          ))}
        </div>
      </Space>

      <Space size="small">
        <Tag
          color={data.SENT.toLowerCase() === "positive" ? "green" : "red"}
          style={{
            borderRadius: "8px",
            padding: "4px 12px",
            fontWeight: 500,
            marginInlineEnd: 0,
          }}
        >
          {data.SENT.charAt(0).toUpperCase() + data.SENT.slice(1)}
        </Tag>

        <InfoCircleOutlined style={{ fontSize: "22px" }} />
        <BorderOutlined style={{ fontSize: "22px" }} />
      </Space>
    </>
  );
};
