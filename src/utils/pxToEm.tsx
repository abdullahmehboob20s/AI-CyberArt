const pxToEm = (value: number): string => {
  const conversion = value / 16;

  return `${conversion}em`;
};

export default pxToEm;
