export function handleSongsCategory(data) {
  // 1. 获取所有的类别
  const categories = data.categories;
  // 2. 创建类别数据结构: Array<{name:string; subs:[]}>
  const categoryData = Object.entries(categories).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    };
  });
  // 3. 将subs添加到对应的类别中
  for (let item of data.sub) {
    // 根据子类别所属的类别id，找到对应类别，添加到其子类别数组中
    categoryData[item.category].subs.push(item);
  }
  return categoryData;
}

// 获取歌手字母类别
export function generateSingerAlpha() {
  let alphabets = ["-1"];
  const start = "A".charCodeAt(0);
  const last = "Z".charCodeAt(0);
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }
  alphabets.push("0");

  return alphabets;
}

export const singerAlphas = generateSingerAlpha();
