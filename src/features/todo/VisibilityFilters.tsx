import React from "react";

export const FILTERS = ["all", "inprogress", "done"]

export type FilterProps = {
  filter: (key: string) => void
}

const VisibilityFilters: React.FC<FilterProps> = ({ filter }) => {
  return (
    <div style={{
      marginTop: "10px"
    }}>
      {FILTERS.map(filterKey => {
        return (
          <span
            style={{
              marginRight: "1rem"
            }}
            key={`visibility-filter-${filterKey}`}
            onClick={() => {
              filter(filterKey)
            }}
          >
            {filterKey}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
