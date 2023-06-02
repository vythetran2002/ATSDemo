var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 1,
  controls: true,
  autoplay: true,
  nav: false,
  autoplayButtonOutput: false,
  controlsContainer : "#custom-control",
  responsive: {
    576: {
      items: 1
    },
    990: {
        items: 2
    },
    1200: {
        items: 3
    }
  }
});