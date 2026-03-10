/**
 * Creates a NotificationModel to be displayed to the user.
 *
 * @param {string} message - Human-readable notification text
 * @param {string} type - One of: 'error', 'warning', 'info', 'success'
 * @param {number} duration - Milliseconds before auto-dismiss (default: 5000)
 * @returns {Object} NotificationModel
 */
export function createNotificationModel(message, type = 'info', duration = 5000) {
    return {
        message,
        type,
        duration,
    };
}
