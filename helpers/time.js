export class TimeFormatter {
  static formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  static formatDate(date) {
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });

    const day = date.getDate();
    const daySuffix = this.getDaySuffix(day);
    const formattedDay = `${day}${daySuffix}`;

    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${weekday} ${formattedDay} ${month} ${year}`;
  }

  static getDaySuffix(day) {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}
