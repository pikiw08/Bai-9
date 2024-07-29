let menu = ["rau xào", "thịt luộc", "gà rán"];
// Lấy menu từ localStorage, hoặc sử dụng menu mặc định nếu không tồn tại
let newMenu = JSON.parse(localStorage.getItem("menu")) || menu;

localStorage.setItem("menu", JSON.stringify(menu));

function showMenu() {
  document.getElementById("menu").innerText = newMenu.join(", ");
}
showMenu();
//thực hiện yêu cầu nhập vào
function create() {
  const newDish = prompt("Mời người dùng nhập món ăn muốn thêm vào menu:");
  if (newDish) {
    menu.push(newDish);
    localStorage.setItem("menu", JSON.stringify(menu));
    displayMenu();
    document.getElementById(
      "result"
    ).innerHTML = `Món ăn mới đã được thêm: ${newDish}`;
  }
}

function read() {
  document.getElementById(
    "result"
  ).innerHTML = `Danh sách món ăn hiện tại: ${menu.join(", ")}`;
}

function update() {
  const oldDish = prompt("Mời người dùng nhập vào tên món muốn thêm:");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i] === oldDish) {
      const newDish = prompt("Mời người dùng nhập vào tên món ăn mới:");
      menu[i] = newDish;
      localStorage.setItem("menu", JSON.stringify(menu));
      displayMenu();
      document.getElementById(
        "result"
      ).innerHTML = `Món ăn đã được cập nhật: ${oldDish} thành ${newDish}`;
      return;
    }
    // Nếu không tìm thấy món ăn sau khi hoàn thành vòng lặp
    document.getElementById(
      "result"
    ).innerHTML = `Không tìm thấy món ăn: ${oldDish}`;
  }
}

function deleteDish() {
  const dishToDelete = prompt("Mời người dùng nhập vào tên món muốn Delete:");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i] === dishToDelete) {
      menu.splice(i, 1);
      localStorage.setItem("menu", JSON.stringify(menu));
      displayMenu();
      document.getElementById(
        "result"
      ).innerHTML = `Món ăn đã được xóa: ${dishToDelete}`;
      return; // Thoát khỏi hàm khi tìm thấy và xóa món ăn
    }
  }

  // Nếu không tìm thấy món ăn sau khi hoàn thành vòng lặp
  document.getElementById(
    "result"
  ).innerHTML = `Không tìm thấy món ăn: ${dishToDelete}`;
}

function performAction() {
  const action = document.getElementById("action").value.toUpperCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (action === "C") {
    create();
  } else if (action === "R") {
    read();
  } else if (action === "U") {
    update();
  } else if (action === "D") {
    deleteDish();
  } else {
    resultDiv.innerHTML = "Vui lòng nhập một ký tự hợp lệ (C, R, U, D)";
  }
}
