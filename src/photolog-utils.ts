export const PhotoLogMetadata: { [key: string]: { [key: string]: number } } = {
  "2025": { count: 90 },
  "2024": { count: 324 },
  "2023": { count: 228 },
  "2022": { count: 213 },
  "2021": { count: 37 },
};

export type PhotoLogImage = {
  blur: string;
  sq: string;
  hq: string;
};

export const extractFileName = (str: string) => {
  const extensionIncluded = /\d+.jpeg/g.exec(str)?.[0] ?? "0";
  return Number(extensionIncluded.substring(0, extensionIncluded.indexOf(".")));
};

export const extractYear = (str: string) => {
  const fileNameIncluded = /\d*\/\d*.jpeg/g.exec(str)?.[0] ?? "0";
  return Number(fileNameIncluded.substring(0, fileNameIncluded.indexOf("/")));
};

const generateUniqueRandomNumbers = (size: number): number[] => {
  const arr = Array.from({ length: size }, (_, i) => i);
  for (let i = size - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const size = Object.values(PhotoLogMetadata).reduce(
  (acc, curr) => (acc += curr.count),
  0,
);

export const rands = generateUniqueRandomNumbers(size);
