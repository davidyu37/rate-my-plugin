// pages/api/categories.js
import db from "../../../utils/firebaseAdmin";

export async function GET(request) {
  try {
    const categoriesCollection = db.collection("categories");
    const snapshot = await categoriesCollection.get();

    if (snapshot.empty) {
      return new Response("No categories found", { status: 404 });
    }

    const categories = [];
    snapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
}
