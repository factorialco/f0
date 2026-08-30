/**
 * Window for hosted side-panel content when it docks to the opposite edge of
 * the AI chat (`panelContentSide !== panelSide`). ApplicationFrame renders it
 * on `panelContentSide`; `<F0AiChat />` keeps the chat on `panelSide`. The two
 * stay exclusive — swapping only moves the main content, which covers one
 * window and uncovers the other in place.
 */
export declare const HostedPanelWindow: () => import("react").JSX.Element;
