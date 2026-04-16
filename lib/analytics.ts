import posthog from "posthog-js";

export const EVENTS = {
  CTA_CLICKED: "cta_clicked",
  LOGO_CLICKED: "logo_clicked",
  MOBILE_MENU_TOGGLED: "mobile_menu_toggled",
  FAQ_TOGGLED: "faq_toggled",
  PLATFORM_TAB_CLICKED: "platform_tab_clicked",
  EXTERNAL_LINK_CLICKED: "external_link_clicked",
  SECTION_VIEWED: "section_viewed",
  SCROLL_DEPTH_REACHED: "scroll_depth_reached",
  CALENDLY_LOADED: "calendly_loaded",
  CALENDLY_BOOKING_COMPLETED: "calendly_booking_completed",
  EMAIL_LINK_CLICKED: "email_link_clicked",
  PHONE_LINK_CLICKED: "phone_link_clicked",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

export function track(event: EventName | string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(event, properties);
  } catch {
    /* no-op: analytics must never break the UI */
  }
}
