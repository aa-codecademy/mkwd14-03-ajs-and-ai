/**
 * Notification - Displays user-facing messages (errors, warnings, info).
 * Auto-hides after the specified duration.
 * Displays based on NotificationModel type with color coding.
 */
export class Notification {
    constructor() {
        this.rootElement = document.getElementById('notification');
        this.currentTimeout = null;
    }

    /**
     * Display a notification.
     * @param {NotificationModel} notificationModel - The notification to display
     */
    show(notificationModel) {
        // Clear any existing timeout
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        // Create notification element
        const notificationDiv = document.createElement('div');
        notificationDiv.className = `notification ${notificationModel.type}`;

        const messageSpan = document.createElement('span');
        messageSpan.textContent = notificationModel.message;

        const closeBtn = document.createElement('button');
        closeBtn.className = 'notification-close-btn';
        closeBtn.textContent = '×';
        closeBtn.addEventListener('click', () => this.hide());

        notificationDiv.appendChild(messageSpan);
        notificationDiv.appendChild(closeBtn);

        // Clear previous notification
        this.rootElement.innerHTML = '';
        this.rootElement.appendChild(notificationDiv);

        // Auto-hide after duration
        this.currentTimeout = setTimeout(
            () => this.hide(),
            notificationModel.duration || 5000,
        );
    }

    /**
     * Hide the notification.
     */
    hide() {
        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
            this.currentTimeout = null;
        }
        this.rootElement.innerHTML = '';
    }
}
