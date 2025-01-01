import React from "react";
import { Box, IconButton, Popover, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { SELECT_PRIORITY, HIGH, MEDIUM, LOW } from "../../resources/data.json";

interface PriorityListPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onPriorityChange: (priority: string) => void;
}

const PriorityListPopover: React.FC<PriorityListPopoverProps> = ({
  anchorEl,
  onClose,
  onPriorityChange,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box
        sx={{ padding: 1, display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography variant="body2" sx={{ padding: 1 }}>
          {SELECT_PRIORITY}
        </Typography>
        <IconButton
          onClick={() => onPriorityChange("high")}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <DoubleArrowIcon sx={{ color: "red", rotate: "270deg" }} />{" "}
          <Typography>{HIGH}</Typography>
        </IconButton>
        <IconButton
          onClick={() => onPriorityChange("medium")}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <DensityMediumIcon sx={{ color: "orange" }} />{" "}
          <Typography>{MEDIUM}</Typography>
        </IconButton>
        <IconButton
          onClick={() => onPriorityChange("low")}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <KeyboardDoubleArrowDownIcon sx={{ color: "#0C66E4" }} />{" "}
          <Typography>{LOW}</Typography>
        </IconButton>
      </Box>
    </Popover>
  );
};

export default PriorityListPopover;
