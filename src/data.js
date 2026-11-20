import berlin from "./images/berlin.jpg";
import denver from "./images/denver.png";
import helsinki from "./images/helsinki.png";
import nairobi from "./images/nairobi.jpg";
import sey1 from "./images/sey1.jpeg";
import sey2 from "./images/sey2.jpeg";
import sey3 from "./images/sey3.jpeg";
import tokyo from "./images/tokyo.jpg";

export const contacts = {
  berlin:   { name: "Berlin",   avatar: berlin,   online: false, lastSeen: "last seen 2 hours ago" },
  denver:   { name: "Denver",   avatar: denver,   online: true,  lastSeen: "last seen 2 hours ago" },
  helsinki: { name: "Helsinki", avatar: helsinki, online: false, lastSeen: "online" },
  nairobi:  { name: "Nairobi",  avatar: nairobi,  online: true,  lastSeen: "online" },
  tokyo:    { name: "Tokyo",    avatar: tokyo,    online: true,  lastSeen: "last seen 3 days ago" },
};

// Alphabetical, as shown in the People and New Group member lists.
export const people = Object.values(contacts);

export const recentChats = [
  { contact: contacts.nairobi, time: "10:00 PM", preview: "Hey whatsup", unread: 3 },
  { contact: contacts.denver,  time: "10:00 PM", preview: "See you soon", unread: 1 },
  { contact: contacts.berlin,  time: "10:00 PM", preview: "get ready for heist" },
];

// Seed conversation shown in the chat window.
export const initialMessages = [
  { id: 1, from: "them", time: "9.00pm", text: "hey checkout these pics  😄" },
  { id: 2, from: "me", time: "9.00pm", text: "🤔🤔🤔🤔🤔" },
  { id: 3, from: "them", time: "9.00pm", images: [sey1, sey2, sey3], more: 5 },
  { id: 4, from: "me", time: "9.00pm", text: "These are amazing 😍" },
];
