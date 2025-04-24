import { useState } from "react";
import { Typography } from "antd";
import { IData_SnippetNews } from "../../data/types";

interface NewsProps {
  data: IData_SnippetNews;
}

export const Tags: React.FC<NewsProps> = ({ data }) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const visibleTags = showAllTags ? data.KW : data.KW.slice(0, 6);
  const hiddenTagsCount = data.KW.length - 6;

  const toggleShowAllTags = () => {
    setShowAllTags((prev) => !prev);
  };

  return (
    <div className="block-tags">
      {visibleTags.map((item, index) => (
        <div className="tags" key={index}>
          <Typography.Text type="secondary">
            {item.value} {item.count}
          </Typography.Text>
        </div>
      ))}

      {data.KW.length > 6 && (
        <Typography.Text className="more-tags" onClick={toggleShowAllTags}>
          {showAllTags ? "Hide" : `Show all +${hiddenTagsCount}`}
        </Typography.Text>
      )}
    </div>
  );
};
