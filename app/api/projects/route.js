import { getDB } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDB();
    const projects = await db.collection('projects').find({}).toArray();
    return Response.json(projects);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}