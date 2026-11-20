import { GitHub, Globe, Instagram, Linkedin, LogOut, Mail, Settings, Smartphone } from "react-feather";

import cm from "../images/cm.jpg";
import { Avatar, Button, Card, IconRow, PageTitle } from "./ui";

const details = [
  { label: "country", value: "India", icon: Globe },
  { label: "Email", value: "arvindhcm7@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 6384769554", icon: Smartphone },
];

const socials = [
  { label: "Github", href: "https://github.com/arvindhcm", icon: GitHub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arvindhcm", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/arvindhcm/", icon: Instagram },
];

const listClass = "mb-4 divide-y divide-line overflow-hidden rounded border border-line bg-surface transition-colors";

export default function Profile({ onOpenSettings }) {
  return (
    <div className="px-4 py-4">
      <PageTitle className="pb-4">Profile</PageTitle>

      <Card className="mb-4 px-5 py-6 text-center">
        <div className="mx-auto mb-4 w-fit">
          <Avatar src={cm} alt="Arvindh CM" size="md" />
        </div>
        <h6 className="my-4 font-medium">Arvindh CM</h6>
        <p className="text-muted">Front end Developer, I focus on reusable and optimized code.</p>
      </Card>

      <ul className={listClass}>
        {details.map(({ label, value, icon }) => (
          <li key={label}>
            <IconRow icon={icon} className="px-5 py-3">
              <p className="mb-2 text-xs text-muted">{label}</p>
              <p>{value}</p>
            </IconRow>
          </li>
        ))}
      </ul>

      <ul className={listClass}>
        {socials.map(({ label, href, icon }) => (
          <li key={label}>
            <IconRow icon={icon} className="px-5 py-3">
              <a href={href} target="_blank" rel="noreferrer" className="hover:text-primary">
                {label}
              </a>
            </IconRow>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="light" size="lg" block onClick={onOpenSettings}>
          Settings <Settings />
        </Button>
        <Button variant="light" size="lg" block>
          Logout <LogOut />
        </Button>
      </div>
    </div>
  );
}
