
const user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
document.getElementById('username')!.textContent = user.name || 'Guest';
