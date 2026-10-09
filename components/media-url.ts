// The Pages export also prefixes public asset literals. Apply the route only once.
export function mediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return base && !path.startsWith(`${base}/`) ? `${base}${path}` : path;
}
