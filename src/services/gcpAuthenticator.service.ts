import { Storage } from '@google-cloud/storage'

const projectId = 'julie-orthopedagogie';

export async function authenticateImplicitWithAdc() {
  const storage = new Storage({ projectId });
  const buckets = await storage.getBuckets();

  console.log('Buckets:')

  for (const bucket of buckets) {
    console.log(`- ${bucket.name}`);
  }

  console.log('Listed all storage buckets.');
}