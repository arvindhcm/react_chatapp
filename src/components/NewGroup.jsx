import { useState } from "react";
import { Image } from "react-feather";

import { people } from "../data";
import { Button, Card, ContactCard, Field, LetterHeading, PageTitle, inputClass } from "./ui";

const tabs = [
  { id: "details", label: "Details" },
  { id: "members", label: "Members" },
];

export default function NewGroup() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="px-4 py-4">
      <PageTitle as="h4" className="pb-4">Create Group</PageTitle>

      <Card className="mb-4 bg-surface-alt px-5 py-6 text-center">
        <label
          htmlFor="fileUpload"
          title="Upload group image"
          className="mx-auto mb-4 flex size-16 cursor-pointer items-center justify-center rounded-full bg-primary text-on-primary"
        >
          <Image />
        </label>
        <input id="fileUpload" type="file" accept="image/png, image/jpeg" className="hidden" />
        <p className="text-muted">
          Max file size 3MB <br /> jpg or png .
        </p>
      </Card>

      <div role="tablist" className="mb-4 flex gap-1 rounded bg-surface-alt p-2">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer rounded border px-4 py-2 transition-colors ${
              activeTab === tab.id ? "border-line bg-surface" : "border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "details" ? (
        <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4">
          <Field label="Name">
            <input type="text" className={inputClass} />
          </Field>
          <Field label="Topic">
            <input type="text" className={inputClass} />
          </Field>
          <Field label="Description">
            <textarea rows={2} className={inputClass} />
          </Field>
          <Button type="submit" className="w-full">Create Group</Button>
        </form>
      ) : (
        <nav>
          {people.map(person => (
            <div key={person.name}>
              <LetterHeading>{person.name[0]}</LetterHeading>
              <ContactCard
                contact={person}
                trailing={<input type="checkbox" aria-label={`Add ${person.name}`} className="size-4" />}
              />
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}
