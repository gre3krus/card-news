import { useMemo } from "react";
import { IData_TrafficItem } from "../data/types";

const countryAbbreviations: Record<string, string> = {
  "United States of America": "USA",
  "United Kingdom": "UK",
  "United Arab Emirates": "UAE",
  "Russian Federation": "RU",
  "South Korea": "SK",
  "North Korea": "NK",
  "New Zealand": "NZ",
  "Saudi Arabia": "SA",
  "Czech Republic": "CZ",
  "Dominican Republic": "DR",
  "South Africa": "ZA",
};

const formatCountry = (country: string) => {
  if (countryAbbreviations[country]) {
    return countryAbbreviations[country];
  }

  return country
    
};

export const useFormattedTraffic = (traffic: IData_TrafficItem[]) => {
  return useMemo(() => {
    return traffic
      .filter((item) => item.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3)
      .map((item) => ({
        country: formatCountry(item.value),
        percent: Math.round(item.count * 100),
      }));
  }, [traffic]);
};
