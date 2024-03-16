import { Client, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65de8159bbd81714f861');



export const account = new Account(client);
export { ID } from 'appwrite';