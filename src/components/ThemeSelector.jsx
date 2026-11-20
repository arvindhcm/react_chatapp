import { useEffect, useRef, useState } from "react";
import { Check, Droplet } from "react-feather";

import { THEMES } from "../themes";

const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * Droplet button in the nav rail that opens a theme menu. The menu is
 * fixed-positioned from the button's rect so the nav's overflow never clips it:
 * to the right of the button on desktop, above it on mobile.
 */
export default function ThemeSelector({ theme, onChange }) {
  const [position, setPosition] = useState(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const open = position !== null;

  const toggle = () => {
    if (open) return setPosition(null);
    const rect = buttonRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    setPosition(
      window.matchMedia(DESKTOP_QUERY).matches
        ? { left: rect.right + 12, bottom: Math.max(8, innerHeight - rect.bottom) }
        : { right: Math.max(8, innerWidth - rect.right), bottom: innerHeight - rect.top + 8 }
    );
  };

  useEffect(() => {
    if (!open) return;
    const close = () => setPosition(null);
    const onPointerDown = e => {
      if (!menuRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) close();
    };
    const onKeyDown = e => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        title="Change theme"
        aria-label="Change theme"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
        className={`flex cursor-pointer rounded-[5px] p-[0.8em] transition-colors ${
          open ? "bg-primary-soft text-primary" : "text-muted hover:text-fg"
        }`}
      >
        <Droplet />
      </button>

      {open && (
        <div
          ref={menuRef}
          role="menu"
          aria-label="Theme"
          style={position}
          className="fixed z-50 w-52 rounded border border-line bg-surface py-2 text-left text-fg shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        >
          <div className="px-4 pb-2 pt-1 text-sm text-muted">Theme</div>
          {THEMES.map(t => {
            const active = t.id === theme;
            return (
              <button
                key={t.id}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  onChange(t.id);
                  setPosition(null);
                }}
                className={`flex w-full cursor-pointer items-center px-4 py-2 transition-colors ${
                  active ? "bg-primary-soft" : "hover:bg-surface-alt"
                }`}
              >
                <span className="mr-3 inline-flex overflow-hidden rounded-full ring-1 ring-line">
                  {t.swatches.map(c => (
                    <span key={c} className="h-5 w-4" style={{ backgroundColor: c }} />
                  ))}
                </span>
                <span className="flex-1 text-left">{t.name}</span>
                {active && <Check className="ml-2 w-[1.2em]" />}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
