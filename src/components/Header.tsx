import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem } from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    items: { title: string; url: string }[];
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <Button
              color="inherit"
              key={index}
              variant="contained"
              sx={{
                p: 1,
                marginTop: "20px",
                marginBottom: "20px",
                fontSize: "13px",
                padding: "5px 13px",
                flexShrink: 0,
              }}
              onClick={(event) => handleClick(event, index)}
              aria-controls={
                activeSectionIndex === index ? "basic-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={activeSectionIndex === index ? "true" : undefined}
            >
              {section.title}
            </Button>
            <Menu
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {section.items.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    location.href = item.url;
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          </>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
