const headerEl = document.getElementsByClassName('fixed-top')[0]
console.log(headerEl);
const getDefaultHeader = () => {
    headerEl.style.cssText = `
    background-color: transparent;
    box-shadow: none;
    height: 90px;
    transition: all 0.4s ease 0s;
  `
}

const getCustomHeader = () => {
    headerEl.style.cssText = `
    background-color: white;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%);
    height: 70px;
    transition: all 0.4s ease 0s;
    
  `
}

const getStyleHeader = {
    default: getDefaultHeader,
    scroll: getCustomHeader
}

window.addEventListener('scroll', () => {
    // Sự kiện này luôn chạy khi run web, theo dõi sự kiện scroll
    const currentScroll = window.pageYOffset // Research pageYOffset for detail
        // console.log('Boy 🚀 ~> currentScroll', currentScroll)

    if (currentScroll === 0) {
        getStyleHeader.default()
    } else if (currentScroll >= 70) {
        getStyleHeader.scroll()
    }
})



// Dark Theme
Solution:
    // Khi click vào nút moon 🌙 , thẻ body sẽ được thêm class dark.
    // Dựa vào class dark, ta viết css dành riêng cho dark theme.

    // Ngược lại, khi click vào nút sun ☀️, ta sẽ xóa class dark để css light theme hiện lại

    // */

    //gọi thẻ button có id là switchButton
    // gắn chức năng click cho switchButton
    document.getElementById("switchButton").onclick = function() {
        //khi button được click thì tìm đến thẻ body có id là myBody
        // dùng classlist để gọi thuộc tính class của thẻ body
        //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
        document.getElementById("carousel").classList.toggle("dark");
        document.getElementById("header").classList.toggle("dark");
        document.getElementById("growID").classList.toggle("dark");
        document.getElementById("whyId").classList.toggle("dark");
        document.getElementById("featuresId").classList.toggle("dark");
        document.getElementById("productId").classList.toggle("dark");
        document.getElementById("footerId").classList.toggle("dark");
        document.getElementById("cardID").classList.toggle("dark");
        document.getElementById("cardID2").classList.toggle("dark");
        document.getElementById("cardID3").classList.toggle("dark");






    }