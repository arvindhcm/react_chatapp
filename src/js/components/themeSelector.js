import React from "react";
import { Dropdown } from "react-bootstrap";
import { Droplet, Check } from "react-feather";

import { THEMES } from "../themes";

const ThemeSelector = ({ theme, onChange, drop }) => (
  <Dropdown className="theme-selector" drop={drop}>
    <Dropdown.Toggle as="a" role="button" title="Change theme" aria-label="Change theme" className="theme-toggle">
      <Droplet />
    </Dropdown.Toggle>

    {/* fixed strategy so the menu escapes the nav rail's overflow clipping */}
    <Dropdown.Menu className="theme-menu" popperConfig={{ strategy: "fixed" }}>
      <Dropdown.Header>Theme</Dropdown.Header>
      {THEMES.map(t => (
        <Dropdown.Item
          key={t.id}
          as="button"
          active={t.id === theme}
          onClick={() => onChange(t.id)}
          className="d-flex align-items-center"
        >
          <span className="theme-swatches mr-3">
            {t.swatches.map(c => <span key={c} style={{ backgroundColor: c }} />)}
          </span>
          <span className="flex-grow-1 text-left">{t.name}</span>
          {t.id === theme && <Check className="icon-sm ml-2" />}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

export default ThemeSelector;
