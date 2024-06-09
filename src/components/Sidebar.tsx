import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description: string;

  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{ p: 2, marginTop: "27px", bgcolor: "grey.200" }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Free
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          target="_blank"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
}
