import { getMessages } from "@/lib/messages";
import { Message } from "@/types";

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const messages = await getMessages() as Message[];

  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
