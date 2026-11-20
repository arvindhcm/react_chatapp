import { useState } from "react";
import { Bell, Shield, User, Users } from "react-feather";

import { BackButton } from "./ChatWindow";
import { Button, Field, IconRow, PageTitle, inputSmClass } from "./ui";

// `null` leaves an empty grid cell, matching the original two-column layout.
const sections = [
  {
    id: "account",
    title: "Account",
    icon: User,
    fields: [["Name", "text"], ["Email", "email"], ["Phone", "tel"], ["Location", "text"]],
  },
  {
    id: "privacy",
    title: "Privacy",
    icon: Shield,
    fields: [["Current password", "password"], null, ["New password", "password"], ["Verify password", "password"]],
  },
  { id: "notification", title: "Notification", icon: Bell, body: "Hello! I'm another body" },
  {
    id: "social",
    title: "Social",
    icon: Users,
    fields: [["Github", "url"], null, ["LinkedIn", "url"], ["Instagram", "url"]],
  },
];

function SectionForm({ fields }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {fields.map((field, i) =>
          field ? (
            <Field key={field[0]} label={field[0]}>
              <input type={field[1]} className={inputSmClass} />
            </Field>
          ) : (
            <div key={`spacer-${i}`} className="hidden sm:block" />
          )
        )}
      </div>
      <Button type="submit" size="sm" className="mr-2 w-1/2">Save</Button>
      <Button type="reset" size="sm" variant="light">Clear Fields</Button>
    </form>
  );
}

export default function SettingsPanel({ onBack }) {
  const [openId, setOpenId] = useState("account");

  return (
    <div className="h-full overflow-auto">
      <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-line bg-surface px-4 pb-2 pt-4 transition-colors md:border-b-0">
        <BackButton onClick={onBack} />
        <PageTitle className="pb-1">Settings</PageTitle>
      </div>

      <div className="px-4 py-4">
        <div className="divide-y divide-line overflow-hidden rounded border border-line">
          {sections.map(({ id, title, icon, fields, body }) => {
            const open = openId === id;
            return (
              <section key={id}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : id)}
                  className="block w-full cursor-pointer bg-surface-alt px-5 py-3 text-left transition-colors"
                >
                  <IconRow icon={icon}>{title}</IconRow>
                </button>
                {open && (
                  <div className="border-t border-line bg-surface p-5 transition-colors">
                    {fields ? <SectionForm fields={fields} /> : body}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
