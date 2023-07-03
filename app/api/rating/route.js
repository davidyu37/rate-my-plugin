import db from "../../../utils/firebaseAdmin";
import admin from 'firebase-admin';

export async function POST(request) {
    try {
      // Parse the request body to get the vote data
      const { pluginId, userId, vote } = await request.json();
  
      // Check if all necessary data is provided
      if (!pluginId || !userId || !vote) {
        return new Response("Missing data in request body", { status: 400 });
      }
  
      // Get a reference to the votes sub-collection of the plugin
      const votesCollection = db.collection("plugins").doc(pluginId).collection("votes");
  
      // Prepare the vote data
      const voteData = { userId, vote, timestamp: admin.firestore.FieldValue.serverTimestamp() };
  
      // Add the new vote
      await votesCollection.add(voteData);
  
      // Update the plugin's rating based on the vote
      const pluginDoc = db.collection("plugins").doc(pluginId);
      if (vote === "up") {
        await pluginDoc.update({ rating: admin.firestore.FieldValue.increment(1) });
      } else if (vote === "down") {
        await pluginDoc.update({ rating: admin.firestore.FieldValue.increment(-1) });
      } else {
        return new Response("Invalid vote value", { status: 400 });
      }
  
      return new Response(JSON.stringify({ message: "Vote recorded successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.toString() }), { status: 500 });
    }
}