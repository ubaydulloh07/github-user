const searchButton = document.getElementById("search");
const userInfo = document.getElementById("userInfo");
const usernameInput = document.getElementById("username");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const login = document.getElementById("login");
const bio = document.getElementById("bio");
const profile = document.getElementById("profile");

searchButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (!username) {
    alert("Iltimos username kiriting");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Foydalanuvchi topilmadi");
      }
      return response.json();
    })
    .then((data) => {
      avatar.src = data.avatar_url;
      login.textContent = data.login;
      name.textContent = data.name || "name yo'q";
      bio.textContent = data.bio || "bio yo'q";
      profile.href = data.html_url;
      profile.textContent = "Profilni ko'rish";
      userInfo.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
      userInfo.style.display = "none";
    });
});
