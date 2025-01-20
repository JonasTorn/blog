export function validateImageUrl(url: string): boolean {
    const validExtensions = /\.(jpg|jpeg|png|gif|webp|bmp)$/i;
    return validExtensions.test(url);
  }