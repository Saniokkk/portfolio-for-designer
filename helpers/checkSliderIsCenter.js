export const checkSliderIsCenter = (
  refElement,
  setState,
  mainContainerSwiper
) => {
  const pageWidth = window.innerWidth;
  const swiperContainerElement = refElement.current;

  if (swiperContainerElement) {
    const numberOfCards = swiperContainerElement.firstChild.children.length;
    const card = swiperContainerElement.firstChild.firstChild;
    const cardWidth = parseInt(getComputedStyle(card).width);
    const marginRightCard = parseInt(getComputedStyle(card).marginRight);

    const totalWidthAllCards =
      cardWidth * numberOfCards + marginRightCard * numberOfCards - 1;
    console.log("pageWidth: ", pageWidth);
    console.log("totalWidthAllCards: ", totalWidthAllCards);

    setState(pageWidth >= totalWidthAllCards);
  }
};
