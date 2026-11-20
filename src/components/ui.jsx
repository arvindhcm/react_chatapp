// Small Tailwind building blocks that replace the react-bootstrap components
// (Card, Media, Button, InputGroup, Badge, Form.Control) the app used before.
import { Search } from "react-feather";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export function PageTitle({ as: Tag = "h3", className, children }) {
  const size = Tag === "h4" ? "text-2xl" : "text-[1.75rem]";
  return <Tag className={cx(size, "font-medium leading-tight", className)}>{children}</Tag>;
}

export function Card({ className, children, ...props }) {
  return (
    <div className={cx("rounded border border-line bg-surface transition-colors", className)} {...props}>
      {children}
    </div>
  );
}

export function Avatar({ src, alt = "", size = "sm", online = false }) {
  return (
    <div className={cx("relative shrink-0", size === "md" ? "size-[4.75rem]" : "size-11")}>
      <img src={src} alt={alt} className="size-full rounded-full object-cover" />
      {online && (
        <span
          aria-label="online"
          className="absolute -bottom-[3px] right-0 size-[30%] -translate-x-[10%] rounded-full border-[3px] border-surface bg-online"
        />
      )}
    </div>
  );
}

export function UnreadBadge({ count }) {
  return (
    <span
      aria-label={`${count} unread`}
      className="absolute right-0 top-0 box-content flex h-[1.5em] min-w-[1.5em] translate-x-[40%] -translate-y-[40%] items-center justify-center rounded-full border-[5px] border-surface bg-primary text-xs font-bold leading-none text-on-primary"
    >
      {count}
    </span>
  );
}

const buttonVariants = {
  primary: "border-primary bg-primary text-on-primary hover:brightness-110",
  light: "border-line bg-surface text-fg hover:bg-surface-alt",
};
const buttonSizes = {
  sm: "rounded-[0.2rem] px-2 py-1 text-sm",
  md: "rounded px-3 py-1.5",
  lg: "rounded-md px-5 py-[0.9375rem] leading-[1.6]",
};

/** `block`: full width with label left and icon right (Bootstrap btn-block + d-flex). */
export function Button({ variant = "primary", size = "md", block = false, className, type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cx(
        "inline-flex cursor-pointer items-center gap-2 border transition",
        block ? "w-full justify-between" : "justify-center",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
}

export const inputClass =
  "block w-full rounded border border-line bg-surface px-3 py-1.5 text-fg outline-none transition-colors placeholder:text-muted focus:border-primary";
export const inputSmClass =
  "block w-full rounded-[0.2rem] border border-line bg-surface px-2 py-1 text-sm text-fg outline-none transition-colors focus:border-primary";

export function SearchInput({ placeholder = "Search", className }) {
  return (
    <div className={cx("flex", className)}>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        className="min-w-0 flex-1 rounded-l border border-line bg-surface px-3 py-1.5 text-fg outline-none transition-colors placeholder:text-muted focus:border-primary"
      />
      <span className="flex items-center rounded-r border border-l-0 border-line bg-surface-alt px-3 text-muted transition-colors">
        <Search />
      </span>
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-muted">{label}</span>
      {children}
    </label>
  );
}

export function LetterHeading({ children }) {
  return (
    <div className="py-4">
      <small className="text-xs uppercase">{children}</small>
    </div>
  );
}

/** Avatar + name + subtitle row inside a card (People / New Group member lists). */
export function ContactCard({ contact, subtitle, trailing }) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <Avatar src={contact.avatar} alt={contact.name} />
      <div className="min-w-0 flex-1">
        <h6 className="truncate font-medium leading-tight">{contact.name}</h6>
        {subtitle && <small className="block truncate text-xs text-muted">{subtitle}</small>}
      </div>
      {trailing}
    </Card>
  );
}

/** Text block on the left, muted icon on the right (Profile info, Settings headers). */
export function IconRow({ icon: Icon, children, className }) {
  return (
    <div className={cx("flex items-center", className)}>
      <div className="min-w-0 flex-1">{children}</div>
      <Icon className="w-[1.2em] shrink-0 text-muted" />
    </div>
  );
}

export { cx };
