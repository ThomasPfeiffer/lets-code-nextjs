import clientPromise from "../../../lib/mongodb";

async function getRestaurants() {
  const client = await clientPromise;
  const db = client.db("letscode");
  const restaurants = await db.collection("restaurants").find({}).toArray();

  return restaurants;
}

export default async function Restaurants() {
  const restaurants = await getRestaurants();

  return (
    <div>
      Hallo!
      <ul>
        {restaurants.map((r) => (
          <li key={r._id.toHexString()}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
