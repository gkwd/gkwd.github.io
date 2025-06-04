const images = document.querySelectorAll("img");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function loadImage(image) {
    image.setAttribute("src", image.getAttribute("data-src"));
  }

  const observer = new IntersectionObserver((myImg, observer) => {
    myImg.forEach((myImgSingle) => {

      // console.log(myImgSingle.intersectionRatio);
      
        if (myImgSingle.intersectionRatio > 0) {
          loadImage(myImgSingle.target);
          observer.unobserve(myImgSingle.target);
        }
    });
  }, options);

  images.forEach((img) => {
    observer.observe(img);
  });