import firebase from "./firebase";
import db from "./db";
export const handleDataChange = (requests, snapshot) => {
  const userUpvotes =
    JSON.parse(localStorage.getItem(new Date().toDateString())) || [];

  const changes = snapshot.docChanges();
  const modified = changes
    .map(x => runReducer(requests, x, userUpvotes))
    .filter(x => x);
  return [...requests, ...modified];
};

const runReducer = (requests, change, userUpvotes) => {
  switch (change.type) {
    case "added":
      let alreadyUpvoted = false;
      if (userUpvotes.some(x => x === change.doc.id)) {
        alreadyUpvoted = true;
      }
      return { ...change.doc.data(), alreadyUpvoted, id: change.doc.id };
    case "modified": {
      requests.splice(requests.findIndex(x => x.id === change.doc.id), 1);
      return { ...change.doc.data(), id: change.doc.id };
    }
    case "removed":
      requests.splice(requests.findIndex(x => x.id === change.doc.id), 1);
      break;
    default:
      return null;
  }
};
export const addRequest = req => {
  const breakdown = req.split("-");
  return db
    .collection("Parties")
    .doc("hAlXTRnQLhPphs5OUsQ6")
    .collection("Requests")
    .add({
      title: breakdown[0].trim(),
      artist: breakdown[1].trim(),
      upvotes: 0,
      played: false,
      alreadyUpvoted: true,
      time_added: firebase.firestore.FieldValue.serverTimestamp()
    });
};
