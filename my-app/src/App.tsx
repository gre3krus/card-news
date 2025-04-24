import React, { useEffect, useState } from "react";
import { Header, Title, News, Tags, SecondCard } from "./components";
import { Button, Card, Space, Typography, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import snippetData from "./data/db.json";
import { IData_SnippetNews } from "./data/types";
import "./App.css";

export const App: React.FC = () => {
  const [data, setData] = useState<IData_SnippetNews | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setData(snippetData as IData_SnippetNews);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="gradient-corner" />
      <Card className="custom-card">
        {loading || !data ? (
          <div
            style={{ display: "flex", justifyContent: "center", padding: 40 }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Header data={data} />
            </div>

            <Title data={data} />
            <News data={data} />
            <Tags data={data} />
            <div className="button-link">
              <Button
                href={data.URL}
                target="_blank"
                style={{ backgroundColor: "#302D39" }}
              >
                Original Source
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography.Text type="secondary" strong>
                Duplicates: {192}
              </Typography.Text>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Typography.Text type="secondary" strong>
                  By Relevance
                </Typography.Text>
                <DownOutlined style={{ fontSize: "16px" }} />
              </div>
            </div>

            <SecondCard data={data} />

            <Button
              style={{
                width: "100%",
                backgroundColor: "#0e0e0e",
              }}
            >
              <DownOutlined style={{ fontSize: "16px" }} />
              View Duplicates
            </Button>
          </Space>
        )}
      </Card>
    </>
  );
};
