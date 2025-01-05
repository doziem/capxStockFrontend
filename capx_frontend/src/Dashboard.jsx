import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },

  {
    id: 4,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);

  const navigation = useNavigate();
  return (
    <Grid container spacing={2} marginTop={4} marginBottom={2}>
      <Grid size={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 2 }}
        >
          <Button variant="outlined" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button
            variant="outlined"
            startIcon={<SendIcon />}
            onClick={() => navigation("about")}
          >
            Send
          </Button>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Card>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "8rem",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
