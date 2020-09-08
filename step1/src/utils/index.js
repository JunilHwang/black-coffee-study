const ONE_FRAME = 1000 / 60;
export const debounceOneFrame = callback => {
  let target = null;
  return () => {
    clearTimeout(target);
    target = setTimeout(() => callback(), ONE_FRAME);
  }
};

export const addEventBubblingListener = (eventType, parent, childSelector, callback) => {
  const isChildrenOf = target => [ ...parent.closest(childSelector) ].includes(target) ||
                                 target.closest(childSelector)
  parent.addEventListener(eventType, event => {
    if (!isChildrenOf(event.target)) return;
    callback(event);
  })
}