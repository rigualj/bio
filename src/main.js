import './styles.css';

document.documentElement.classList.add('ready');

const avatarWrap = document.getElementById('avatar-wrap');
const bioPhoto = document.getElementById('bio-photo');

if (avatarWrap && bioPhoto) {
  bioPhoto.addEventListener('load', () => {
    avatarWrap.hidden = false;
  });

  bioPhoto.addEventListener('error', () => {
    avatarWrap.hidden = true;
  });
}
