// utils.js
function truncateEmail(email) {
    const maxLength = 15;
    if (email.length > maxLength) {
        return email.substring(0, maxLength) + '...';
    } else {
        return email;
    }
}

module.exports = {
    truncateEmail: truncateEmail
};
