import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Menu, MenuItem } from "@mui/material";
import "./header.css";
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
  const [activeSectionIndex, setActiveSectionIndex] = React.useState<
    number | null
  >(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveSectionIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveSectionIndex(null);
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
              className="button"
              color="inherit"
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
            {activeSectionIndex === index && (
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {section.items.map((item, itemIndex) => (
                  <MenuItem
                    key={itemIndex}
                    onClick={() => {
                      handleClose();
                      location.href = item.url;
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </React.Fragment>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
