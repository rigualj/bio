import './styles.css';

document.documentElement.classList.add('ready');

// Show the profile photo area only when profile.jpg is present in the repo.
// The <div id="avatar-wrap"> starts as hidden; we reveal it on a successful load.
const avatarWrap = document.getElementById('avatar-wrap');
const bioPhoto   = document.getElementById('bio-photo');

if (avatarWrap && bioPhoto) {
  bioPhoto.addEventListener('load', () => {
    avatarWrap.hidden = false;
  });

  bioPhoto.addEventListener('error', () => {
    // Image not found — keep the wrapper hidden so layout stays clean.
    avatarWrap.hidden = true;
  });
}
