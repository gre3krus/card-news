import React, { useState } from "react";
import { Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { IData_SnippetNews } from "../../data/types";
const parseHighlights = (highlights: string[]) => {
  return (
    <Typography.Paragraph style={{ marginBottom: 0 }}>
      {highlights.map((highlight, highlightIndex) => {
        const parts = highlight.split(/(<kw>|<\/kw>)/g).filter(Boolean);

        return (
          <React.Fragment key={highlightIndex}>
            {parts.map((part, idx) => {
              if (part === "<kw>" || part === "</kw>") {
                return null;
              }
              const tags = idx > 0 && parts[idx - 1] === "<kw>";

              return tags ? (
                <Typography.Text
                  key={`${highlightIndex}-${idx}`}
                  style={{
                    backgroundColor: "#0772CB",
                    padding: "2px 4px",
                    borderRadius: "4px",
                  }}
                >
                  {part}
                </Typography.Text>
              ) : (
                <Typography.Text key={`${highlightIndex}-${idx}`}>
                  {part}
                </Typography.Text>
              );
            })}
            {highlightIndex !== highlights.length - 1 && (
              <Typography.Text key={`semicolon-${highlightIndex}`}>
                ;
              </Typography.Text>
            )}{" "}
          </React.Fragment>
        );
      })}
    </Typography.Paragraph>
  );
};

interface NewsProps {
  data: IData_SnippetNews;
}

export const News: React.FC<NewsProps> = ({ data }) => {
  const [showMoreNews, setShowMoreNews] = useState(false);

  const toggleShowMoreNews = () => {
    setShowMoreNews((prev) => !prev);
  };
  return (
    <div>
      <div>
        {showMoreNews && <Typography.Text>{data.AB}</Typography.Text>}
        {parseHighlights(data.HIGHLIGHTS)}
        <div className="more-news" onClick={toggleShowMoreNews}>
          <span>{showMoreNews ? "Show less" : "Show more"}</span>
          <CaretDownOutlined style={{ fontSize: "12px" }} />
        </div>
      </div>
    </div>
  );
};
