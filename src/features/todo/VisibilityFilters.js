import React from "react";

const VISIBILITY_FILTERS = ["todo", "inprogress", "done"]

const VisibilityFilters = () => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            style={{
              marginRight: "1rem"
            }}
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

// const mapStateToProps = state => {
//   return { activeFilter: state.visibilityFilter };
// };
export default VisibilityFilters;
// export default connect(
//   mapStateToProps,
//   { setFilter }
// )(VisibilityFilters);
