import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Paperclip, Phone, Send, Smile, Video } from "react-feather";

import { contacts } from "../data";
import { Avatar, cx } from "./ui";

function Message({ from, time, text, images, more }) {
  const mine = from === "me";
  return (
    <div
      className={cx(
        "mt-4 rounded-[0.5em] px-4 py-2 transition-colors",
        mine ? "ml-12 bg-primary text-on-primary" : "mr-12 bg-surface-alt"
      )}
    >
      {text && <p className="whitespace-pre-wrap break-words">{text}</p>}
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

export default function ChatWindow({ messages, onSend, onBack }) {
  const contact = contacts.nairobi;
  const [draft, setDraft] = useState("");
  const endRef = useRef(null);

  // Keep the newest message in view.
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft("");
  };

  // Enter sends; Shift+Enter inserts a newline. Ignore Enter while an IME is composing.
  const onKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

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
        {messages.map(m => (
          <Message key={m.id} {...m} />
        ))}
        <div ref={endRef} />
      </div>

      <footer className="flex items-center justify-between border-t border-line py-2">
        <div className="flex min-w-0 flex-1 items-center">
          <span className="px-3 text-muted">
            <Smile />
          </span>
          <textarea
            placeholder="Type your message"
            aria-label="Type your message"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            className="h-[46px] min-w-0 flex-1 resize-none overflow-hidden bg-transparent px-3 leading-[2em] outline-none placeholder:text-muted"
          />
        </div>

        <div className="flex items-center pr-4">
          <Paperclip className="mr-4 text-muted" />
          <button
            type="button"
            aria-label="Send"
            onClick={send}
            disabled={!draft.trim()}
            className="flex size-[3em] cursor-pointer items-center justify-center rounded-full bg-primary text-on-primary transition hover:brightness-110 disabled:cursor-default disabled:opacity-60 disabled:hover:brightness-100"
          >
            <Send className="w-[1.3em]" />
          </button>
        </div>
      </footer>
    </div>
  );
}
