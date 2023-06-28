const profilePic = document.getElementById('profile-pic');
    
profilePic.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

const toggleSwitch = document.getElementById('theme-toggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
});