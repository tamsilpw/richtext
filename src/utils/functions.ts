import type { ClickType } from "./types";

export const makeImagesClickableInHtml = (html: string): string => {
  if (!html) {
    return "";
  }

  if (typeof window === "undefined") {
    return html;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const images = doc.querySelectorAll("img");

  images.forEach((image) => {
    image.setAttribute("data-img-click", "true");
    image.style.cursor = "pointer";
  });

  return doc.body.innerHTML;
};

export const isFromApp = () => {
    return true
//   return globalStorage.getItem('fromApp') === 'true';
};

export const invokeAppMethod = (
  methodName: ClickType,
  ...methodArgs: any[]
): any => {
//   if (!isFromApp()) {
//     return;
//   }
  if (typeof window !== 'undefined') {
    try {
      if (typeof (window as any).JSBridge?.[methodName] === 'function') {
        if (methodArgs.length) {
          return (window as any).JSBridge[methodName](...methodArgs);
        } else {
          return (window as any).JSBridge[methodName]();
        }
      } else if (
        typeof (window as any).webkit?.messageHandlers?.[methodName]
          ?.postMessage === 'function'
      ) {
        if (methodArgs.length) {
          return (window as any).webkit.messageHandlers[methodName].postMessage(
            ...methodArgs
          );
        } else {
          return (window as any).webkit.messageHandlers[methodName].postMessage(
            {}
          );
        }
      }
    } catch (err) {
      console.log(
        `error in calling native method: ${methodName} with arguments: ${methodArgs
          .map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          )
          .join(',   ')}, err: ${err}`
      );
      return;
    }
  }
};