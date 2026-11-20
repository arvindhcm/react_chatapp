import { useState } from "react";
import { Edit, Linkedin, MessageSquare, Settings, User, Users } from "react-feather";

import ChatWindow from "./components/ChatWindow";
import SettingsPanel from "./components/SettingsPanel";
import Sidebar from "./components/Sidebar";
import ThemeSelector from "./components/ThemeSelector";
import { cx } from "./components/ui";
import { applyTheme, getSavedTheme } from "./themes";

// Same breakpoint the Bootstrap layout used (768px = Tailwind `md`).
const isSmallScreen = () => !window.matchMedia("(min-width: 768px)").matches;

function NavItem({ label, icon: Icon, active, onClick }) {
  return (
    <li>
      <button
        type="button"
        title={label}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
        className={cx(
          "flex cursor-pointer rounded-[5px] p-[0.8em] transition-colors",
          active ? "bg-primary-soft text-primary" : "text-muted hover:text-fg"
        )}
      >
        <Icon />
      </button>
    </li>
  );
}

export default function App() {
  const [sidebarTab, setSidebarTab] = useState("chats");
  const [mainTab, setMainTab] = useState("chat");
  // On phones the chat panel starts closed so the sidebar is visible first.
  const [mainOpen, setMainOpen] = useState(() => !isSmallScreen());
  const [theme, setTheme] = useState(getSavedTheme);

  const openMain = tab => {
    setMainTab(tab);
    setMainOpen(true);
  };

  const changeTheme = id => {
    applyTheme(id);
    setTheme(id);
  };

  return (
    <div className="flex h-full flex-col bg-page transition-colors md:pt-12">
      <div
        className={cx(
          "flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-[5px] border border-line bg-surface text-fg transition-colors",
          // Bootstrap .container widths
          "md:mx-auto md:max-w-[720px] md:flex-row lg:max-w-[960px] xl:max-w-[1140px]"
        )}
      >
        {/* Nav: bottom bar on mobile, left rail on desktop */}
        <nav className="order-2 border-t border-line px-6 md:order-none md:flex md:w-[90px] md:shrink-0 md:flex-col md:overflow-y-auto md:border-t-0 md:px-0">
          <ul className="flex grow items-center justify-between py-2 md:flex-col md:justify-center md:gap-12">
            <NavItem label="New group" icon={Edit} active={sidebarTab === "newGroup"} onClick={() => setSidebarTab("newGroup")} />
            <NavItem label="People" icon={Users} active={sidebarTab === "people"} onClick={() => setSidebarTab("people")} />
            <NavItem label="Chats" icon={MessageSquare} active={sidebarTab === "chats"} onClick={() => setSidebarTab("chats")} />
            <NavItem label="Profile" icon={User} active={sidebarTab === "profile"} onClick={() => setSidebarTab("profile")} />
            <NavItem
              label="Settings"
              icon={Settings}
              active={mainTab === "settings" && mainOpen}
              onClick={() => openMain("settings")}
            />
            <li>
              <ThemeSelector theme={theme} onChange={changeTheme} />
            </li>
          </ul>
        </nav>

        <aside className="order-1 grow overflow-y-auto overflow-x-hidden md:w-[420px] md:shrink-0 md:grow-0">
          <Sidebar
            activeTab={sidebarTab}
            onOpenChat={() => openMain("chat")}
            onOpenSettings={() => openMain("settings")}
          />
        </aside>

        {/* Main panel: full-screen overlay on mobile, right column on desktop */}
        <main
          className={cx(
            "fixed inset-0 z-10 order-3 overflow-hidden bg-surface transition-colors",
            "md:visible md:static md:z-auto md:flex-1 md:translate-x-0 md:border-l md:border-line",
            mainOpen ? "translate-x-0" : "invisible -translate-x-full"
          )}
        >
          {mainTab === "settings" ? (
            <SettingsPanel onBack={() => setMainOpen(false)} />
          ) : (
            <ChatWindow onBack={() => setMainOpen(false)} />
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="shrink-0 px-4 py-1.5 text-center text-xs text-on-page transition-colors md:flex md:h-12 md:items-center md:justify-center md:py-0">
      <p>
        Vibe coded with AI · Design directed by{" "}
        <a
          href="https://www.linkedin.com/in/arvindhcm/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 whitespace-nowrap font-bold underline-offset-2 hover:underline"
        >
          Arvindh CM
          <Linkedin className="size-3" aria-hidden="true" />
        </a>
      </p>
    </footer>
  );
}
