const pxToRem = (value: number): string => {
  const conversion = value / 16;

  return `${conversion}rem`;
};

export default pxToRem;
