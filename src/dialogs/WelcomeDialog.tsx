import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  LOGGING_IN,
  WELCOME,
  WELCOME_MESSAGE,
  SMILY,
} from "../resources/data.json";

const WelcomeDialog = ({ open, userName, loading }: any) => {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "#F9FAFC", // Light background color for a clean look
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        {loading ? (
          <>
            <CircularProgress sx={{ color: "#1976D2" }} />{" "}
            {/* Primary site color */}
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: "#1976D2", // Primary color for text
                fontWeight: "bold",
              }}
            >
              {LOGGING_IN}
            </Typography>
          </>
        ) : (
          <>
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "#1976D2", // Primary color for avatar
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#FFFFFF", fontWeight: "bold" }}
              >
                {SMILY}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: "#1976D2", // Primary color for welcome message
                fontWeight: "bold",
              }}
            >
              {WELCOME}, {userName}!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#546E7A", // Subtle gray for supporting text
                mt: 1,
              }}
            >
              {WELCOME_MESSAGE}
            </Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;