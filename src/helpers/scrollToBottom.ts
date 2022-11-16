import { animateScroll } from "react-scroll";

export function scrollToBottom(id: string) {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 0,
      delay: 0,
      smooth: true,
      offset: -50,
    });
  }, 0);
}

export function scrollToBottomAnimated(id: string) {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      duration: 250,
      delay: 0,
      smooth: true,
      offset: -50,
    });
  }, 0);
}
