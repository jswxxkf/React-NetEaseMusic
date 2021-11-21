/**
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去}
 */
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
  const lyricLines = lyricString.split("\n");
  const lyrics = [];
  for (let lyricLine of lyricLines) {
    if (lyricLine) {
      // returns an array containing the matched patterns
      let result = parseExp.exec(lyricLine);
      result = result.map((item) => parseInt(item));
      if (!result) continue;
      const time1 = result[1] * 60 * 1000; // 分
      const time2 = result[2] * 1000; // 秒
      const time3 =
        result[3].toString().length === 3 ? result[3] : result[3] * 10; // 毫秒
      // 当前行歌词对应的时间
      const time = time1 + time2 + time3;
      // 拿到当前行的歌词文本
      const content = lyricLine.replace(parseExp, "").trim();
      const lycLineObj = { time, content };
      lyrics.push(lycLineObj);
    }
  }
  return lyrics;
}
