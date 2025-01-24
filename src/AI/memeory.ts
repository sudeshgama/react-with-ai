import { AIMessage } from "../types/AiMessage";
import { v4 as uuidv4 } from 'uuid';
import { LocalStoragePreset } from "lowdb/browser";

export type MessageWithMetadata = AIMessage & {
  id: string;
  createdAt: string;
}

export type Data = {
  messages: MessageWithMetadata[]
}

const defaultData: Data = { messages: [] }

export const addMetaData = (message: AIMessage): MessageWithMetadata => ({
  ...message,
  id: uuidv4(),
  createdAt: new Date().toISOString()
});

export const removeMetaData = (message: MessageWithMetadata): AIMessage => {
  const { id, createdAt, ...messageWithoutMetadata } = message;
  return messageWithoutMetadata;
}

export const getDb = async () => {
  const db = await LocalStoragePreset<Data>('db', defaultData);
  return db;
}

export const addMessages = async (messages: AIMessage[]) => {
  const db = await getDb();
  db.data.messages.push(...messages.map(addMetaData));
  await db.write();
}

export const getMessages = async (): Promise<AIMessage[]> => {
  const db = await getDb();
  return db.data.messages.map(removeMetaData);
}