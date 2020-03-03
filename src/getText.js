module.exports = async (element, selector) => {
  let nElement = await element.$(selector);
  return (
    await (await nElement.getProperty("textContent")).jsonValue()
  ).replace(/(\r\n|\n|(\s{2,}))/g, "");
};
