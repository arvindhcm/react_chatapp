import { ChevronLeft, Paperclip, Phone, Send, Smile, Video } from "react-feather";

import { contacts } from "../data";
import sey1 from "../images/sey1.jpeg";
import sey2 from "../images/sey2.jpeg";
import sey3 from "../images/sey3.jpeg";
import { Avatar, cx } from "./ui";

const messages = [
  { from: "them", time: "9.00pm", text: "hey checkout these pics  😄" },
  { from: "me", time: "9.00pm", text: "🤔🤔🤔🤔🤔" },
  { from: "them", time: "9.00pm", images: [sey1, sey2, sey3], more: 5 },
  { from: "me", time: "9.00pm", text: "These are amazing 😍" },
];

function Message({ from, time, text, images, more }) {
  const mine = from === "me";
  return (
    <div
      className={cx(
        "mt-4 rounded-[0.5em] px-4 py-2 transition-colors",
        mine ? "ml-12 bg-primary text-on-primary" : "mr-12 bg-surface-alt"
      )}
    >
      {text && <p>{text}</p>}
      {images && (
        <div className="flex flex-wrap items-center">
          {images.map(src => (
            <img key={src} src={src} alt="" className="mb-2 mr-4 w-[6em] rounded-[3px] md:w-[7em]" />
          ))}
          {more && <span className="mb-2 rounded-[5px] bg-primary-soft p-4">+{more}</span>}
        </div>
      )}
      <small className="mt-2 text-xs opacity-65">{time}</small>
    </div>
  );
}

export function BackButton({ onClick, className }) {
  return (
    <button type="button" aria-label="Back" onClick={onClick} className={cx("cursor-pointer md:hidden", className)}>
      <ChevronLeft />
    </button>
  );
}

export default function ChatWindow({ onBack }) {
  const contact = contacts.nairobi;

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <BackButton onClick={onBack} />

        <div className="flex min-w-0 flex-1 items-center gap-4">
          <Avatar src={contact.avatar} alt={contact.name} online={contact.online} />
          <div className="min-w-0">
            <h6 className="mb-1 truncate font-medium leading-tight">{contact.name}</h6>
            <p className="text-xs text-muted">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-muted">
          <Phone />
          <Video />
        </div>
      </header>

      <div className="flex-1 overflow-auto px-4 pb-4">
        {messages.map((m, i) => (
          <Message key={i} {...m} />
        ))}
      </div>

      <footer className="flex items-center justify-between border-t border-line py-2">
        <div className="flex min-w-0 flex-1 items-center">
          <span className="px-3 text-muted">
            <Smile />
          </span>
          <textarea
            placeholder="Type your message"
            aria-label="Type your message"
            className="h-[46px] min-w-0 flex-1 resize-none overflow-hidden bg-transparent px-3 leading-[2em] outline-none placeholder:text-muted"
          />
        </div>

        <div className="flex items-center pr-4">
          <Paperclip className="mr-4 text-muted" />
          <button
            type="button"
            aria-label="Send"
            className="flex size-[3em] cursor-pointer items-center justify-center rounded-full bg-primary text-on-primary transition hover:brightness-110"
          >
            <Send className="w-[1.3em]" />
          </button>
        </div>
      </footer>
    </div>
  );
}
