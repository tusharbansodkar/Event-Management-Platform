import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField, Button, Box, Typography, MenuItem } from "@mui/material";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    eventType: "public", // Default: Public event
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Event Data:", eventData);
    // Later, send this data to the backend (we'll implement API integration)
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={2}>
        Create Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Event Name"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          type="time"
          name="time"
          value={eventData.time}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          select
          fullWidth
          label="Event Type"
          name="eventType"
          value={eventData.eventType}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="public">Public</MenuItem>
          <MenuItem value="private">Private</MenuItem>
        </TextField>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Event
        </Button>
      </form>
    </Box>
  );
};
export default CreateEvent;
