import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async content => {
  console.log("post to the database");
  const newContentDB = await ("content", 1);
  const tx = newContentDB.transaction("contact", "readwrite");
  const store = tx.objectStore("content");
  const request = store.add({ content });

  const result = await request;
  console.log("🚀 - data saved to the database", result);
  console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const newContentDB = await openDB("content", 1));
  const tx = newContentDB.transaction("contact", "readonly");
  const store = tx.objectStore('contact');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  console.error("getDb not implemented");
}
initdb();
