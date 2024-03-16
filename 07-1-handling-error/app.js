function parseURL(url) {
  try {
    return new URL(url);
  } catch (error) {
    console.error("Error parsing URL:", error.message);
    return null;
  }
}
