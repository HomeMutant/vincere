import { contact } from '../data/config';

export function inquiryMessage(name: string, ml: number, price: number) {
  return `Hi VINCERE! I'm interested in ${name} (${ml}ml, RM${price}). Is it available?`;
}

// Opens a WhatsApp chat with the message already typed in.
export function whatsappLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
