export interface Caption {
  startTime: string;
  endTime: string;
  text: string;
}
export function generateCaption(rawCaption: string): Caption[] {
  const captionLines = splitLine(rawCaption);

  const caption = captionLines.map(splitTimeAndText);

  return caption;
}

function splitLine(rawCaption: string) {
  return rawCaption.split("\n\n");
}

function splitTimeAndText(line: string): Caption {
  const [time, text] = line.split("\n");
  const [startTime, endTime] = time.split(",");

  return {
    startTime,
    endTime,
    text,
  };
}
