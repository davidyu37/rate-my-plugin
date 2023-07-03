// pages/api/categories.js
import db from "../../../utils/firebaseAdmin";

export async function GET(request) {
  try {
    const pluginsCollection = db.collection("plugins");
    const snapshot = await pluginsCollection.get();

    if (snapshot.empty) {
      return new Response("No plugins found", { status: 404 });
    }
    
    const plugins = [];
    snapshot.forEach((doc) => {
      plugins.push({ id: doc.id, ...doc.data() });
    });

    return new Response(JSON.stringify(plugins), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
