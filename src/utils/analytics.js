/**
 * Centralized analytics tracking utility
 */

export const trackEvent = (eventName, eventData = {}) => {
  // In a real production environment, this would push to Google Analytics/Mixpanel
  // e.g., window.dataLayer.push({ event: eventName, ...eventData })
  
  console.log(`[Analytics Event Tracked] ${eventName}`, eventData);
};
