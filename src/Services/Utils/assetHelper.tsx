export function removeCSSClass(ele: any, cls: string) {
  const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  ele.className = ele.className.replace(reg, ' ');
}

export function addCSSClass(ele: any, cls: string) {
  ele.classList.add(cls);
}

export const getImageFromAssets = (pathname: string) => {
  return require(`../../assets/${pathname}`);
};

export const getImageFromStorage = (pathname: string) =>
  process.env.REACT_APP_API_IMAGE + '/' + pathname;

export const imageApi = (name: string) =>
  `https://ui-avatars.com/api/?background=f4f4f5&color=000&length=2&name=${name}`;

export const imageApiAvatarUser = (name: string) =>
  `https://ui-avatars.com/api/?background=0062FF&color=FFF&length=2&name=${name}`;

export const capitalize = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase(),
  );
