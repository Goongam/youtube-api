export function getVideoId(videoURL: string) {
  try {
    return new URL(videoURL).searchParams.get("v");
  } catch (e) {
    return "";
  }
}
