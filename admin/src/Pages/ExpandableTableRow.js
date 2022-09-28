import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { TableCell, TableRow, Tooltip } from "@mui/material";

export const ExpandableTableRow = ({
  children,
  expandComponent,
  ...otherProps
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <TableRow sx={{ cursor: 'pointer' }} onClick={() => setIsExpanded(!isExpanded)} {...otherProps}>
        <TableCell padding="checkbox">
          <IconButton >
            <Tooltip title={isExpanded ? "view less" : "view more"} placement="bottom">
              {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Tooltip>
          </IconButton>
        </TableCell>
        {children}
      </TableRow>
      {isExpanded && (
        <TableRow>
          <TableCell padding="checkbox" />
          {expandComponent}
        </TableRow>
      )}
    </>
  );
};
