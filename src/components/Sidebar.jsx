import { Users } from "react-feather";

import { contacts, people, recentChats } from "../data";
import NewGroup from "./NewGroup";
import Profile from "./Profile";
import { Avatar, Button, Card, ContactCard, LetterHeading, PageTitle, SearchInput, UnreadBadge } from "./ui";

const storyOrder = ["berlin", "denver", "helsinki", "nairobi", "tokyo"];

function Chats({ onOpenChat }) {
  return (
    <div className="px-4 py-4">
      <PageTitle className="mb-6">chat</PageTitle>

      <SearchInput className="mb-4" />

      <div className="my-4 flex gap-4 overflow-x-auto text-center">
        {storyOrder.map(key => {
          const c = contacts[key];
          return (
            <div key={key} className="shrink-0">
              <Avatar src={c.avatar} alt={c.name} online={c.online} />
              <div className="mt-1 text-xs">{c.name}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {recentChats.map(({ contact, time, preview, unread }) => (
          <button key={contact.name} type="button" onClick={onOpenChat} className="block cursor-pointer text-left">
            <Card className="relative flex items-start gap-4 p-5 hover:bg-surface-alt">
              <Avatar src={contact.avatar} alt={contact.name} />
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h6 className="mr-auto truncate font-medium leading-tight">{contact.name}</h6>
                  <p className="truncate text-xs text-muted">{time}</p>
                </div>
                <p className="truncate text-muted">{preview}</p>
              </div>
              {unread && <UnreadBadge count={unread} />}
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}

function People() {
  return (
    <div className="px-4 py-4">
      <PageTitle className="pb-4">People</PageTitle>
      <SearchInput placeholder="search for users" className="pb-4" />

      <Button variant="light" block>
        Invite People <Users />
      </Button>

      <nav>
        {people.map(person => (
          <div key={person.name}>
            <LetterHeading>{person.name[0]}</LetterHeading>
            <ContactCard contact={person} subtitle={person.lastSeen} />
          </div>
        ))}
      </nav>
    </div>
  );
}

export default function Sidebar({ activeTab, onOpenChat, onOpenSettings }) {
  switch (activeTab) {
    case "newGroup":
      return <NewGroup />;
    case "people":
      return <People />;
    case "profile":
      return <Profile onOpenSettings={onOpenSettings} />;
    default:
      return <Chats onOpenChat={onOpenChat} />;
  }
}
