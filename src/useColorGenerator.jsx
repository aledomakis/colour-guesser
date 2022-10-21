const useColorGenerator = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const generatedColor = { r, g, b };
  return { r, g, b };
};

export default useColorGenerator;
