let passwordInput = document.querySelector("#passwordInput");
let genBtn = document.querySelector("#genBtn");
let copyBtn = document.querySelector("#copyBtn");

const generatePassword = () => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0, n = charset.length; i < 9; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  passwordInput.value = password;
};
const copyPassword = async () => {
  try {
    await navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
    alert("Failed to copy password. Please try again.");
  }
};
copyBtn.addEventListener("click", copyPassword);
genBtn.addEventListener("click", generatePassword);
