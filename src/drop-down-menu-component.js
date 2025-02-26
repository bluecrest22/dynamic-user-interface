export function displayDropDownMenu(menuName) {
  const menuDivName = "." + menuName + "-drop-down-menu";
  const menuBtnName = "." + menuName + "-drop-down-btn";
  const menuListName = "." + menuName + "-drop-down-list";

  const menuDiv = document.querySelector(menuDivName);
  const menuBtn = document.querySelector(menuBtnName);
  const menuList = document.querySelector(menuListName);

  menuDiv.style.display = "flex";
  menuDiv.style.flexDirection = "column";
  menuDiv.style.alignItems = "flex-start";

  menuBtn.style.opacity = "0.6";
  menuBtn.style.border = "none";
  menuBtn.padding = " 15px 32px";

  menuBtn.addEventListener("mouseover", () => {
    menuList.style.visibility = "visible";
    menuBtn.style.opacity = "1";
  });

  menuBtn.addEventListener("mouseout", () => {
    menuList.style.visibility = "hidden";
    menuBtn.style.opacity = "0.6";
  });

  menuList.addEventListener("mouseover", () => {
    menuList.style.visibility = "visible";
  });

  menuList.addEventListener("mouseout", () => {
    menuList.style.visibility = "hidden";
  });

  menuList.style.listStyleType = "none";
  menuList.style.margin = "0";
  menuList.style.padding = "0";
  menuList.style.visibility = "hidden";
  menuList.style.opacity = "0.6";
}
