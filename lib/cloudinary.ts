export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; height?: number; quality?: number }
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const transforms = [];
  if (options?.width) transforms.push(`w_${options.width}`);
  if (options?.height) transforms.push(`h_${options.height}`);
  transforms.push(`q_${options?.quality || 80}`);
  transforms.push("f_auto");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
}

export function getOgImageUrl(publicId: string): string {
  return getCloudinaryUrl(publicId, { width: 1200, height: 630, quality: 80 });
}
