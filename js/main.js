const headerEl = document.getElementsByClassName('fixed-top')[0]

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
  console.log('Boy 🚀 ~> currentScroll', currentScroll)

  if (currentScroll === 0) {
    getStyleHeader.default()
  } else if (currentScroll >= 70) {
    getStyleHeader.scroll()
  }
})
