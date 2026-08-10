/**
  Helper utilities for phone formatting, WhatsApp links, and business status
 */

export function cleanPhoneForTel(phone: string): string {
  if (!phone) return '#';
  const digits = phone.replace(/[^\d+]/g, '');
  return `tel:${digits}`;
}

export function cleanPhoneForWhatsApp(phone: string, text = 'Hello! I am contacting you from your website.'): string {
  if (!phone) return '#';
  const digits = phone.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${digits}?text=${encodedText}`;
}

export function getOpeningStatus(openingHoursStr: string): { isOpen: boolean; statusText: string } {
  if (!openingHoursStr) {
    return { isOpen: true, statusText: 'Open Today' };
  }

  const lower = openingHoursStr.toLowerCase();
  if (lower.includes('24/7') || lower.includes('24 hours')) {
    return { isOpen: true, statusText: 'Open 24/7 • Emergency Service Available' };
  }

  // Get current hour in local time
  const now = new Date();
  const currentHour = now.getHours();

  // Simple heuristic parsing (e.g. "Mon-Fri: 8:00 AM - 6:00 PM")
  if (currentHour >= 8 && currentHour < 18) {
    return { isOpen: true, statusText: `Open Now • ${openingHoursStr.split(',')[0] || openingHoursStr}` };
  } else {
    return { isOpen: false, statusText: `Closed Now • ${openingHoursStr}` };
  }
}

export function getContrastTextColor(hexColor: string): string {
  if (!hexColor || !hexColor.startsWith('#') || hexColor.length < 7) {
    return '#ffffff';
  }
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#0f172a' : '#ffffff';
}
