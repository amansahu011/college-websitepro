document.addEventListener("DOMContentLoaded", function () {
  // Array of images for placements
  const placementsImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
  ];

  // Array of images for placement logos
  const placementLogos = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.png",
    "32.png",
    "33.png",
    "34.png",
    "35.png",
    "36.png",
    "37.png",
    "38.png",
    "39.png",
    "40.png",
    "41.png",
    "42.png",
    "43.png",
    "44.png",
    "45.png",
    "46.png",
    "47.png",
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
  ];

  let placementsIndex = 0;
  let logosIndex = 0;

  // Function to change placements image
  function changePlacementsImage() {
    document.getElementById(
      "placementsImage"
    ).src = `../Images/Placements/${placementsImages[placementsIndex]}`;
    placementsIndex = (placementsIndex + 1) % placementsImages.length;
  }

  // Function to change placement logos
  function changePlacementLogos() {
    document.getElementById(
      "logo1"
    ).src = `../Images/Placement Logos/${placementLogos[logosIndex]}`;
    document.getElementById("logo2").src = `../Images/Placement Logos/${
      placementLogos[(logosIndex + 1) % placementLogos.length]
    }`;
    document.getElementById("logo3").src = `../Images/Placement Logos/${
      placementLogos[(logosIndex + 2) % placementLogos.length]
    }`;
    document.getElementById("logo4").src = `../Images/Placement Logos/${
      placementLogos[(logosIndex + 3) % placementLogos.length]
    }`;
    logosIndex = (logosIndex + 1) % placementLogos.length;
  }

  // Initial image change
  changePlacementsImage();
  changePlacementLogos();

  // Interval to change images every 2 seconds
  setInterval(function () {
    changePlacementsImage();
    changePlacementLogos();
  }, 2000);
});

$(document).ready(function () {
  $(".outer-circle").each(function () {
    var angle = parseFloat($(this).css("--angle"));
    var centerX =
      $(".center-circle").offset().left + $(".center-circle").width() / 2;
    var centerY =
      $(".center-circle").offset().top + $(".center-circle").height() / 2;
    var radius = 250;

    var x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    var y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    $(".connecting-lines").append(
      '<line x1="' +
        centerX +
        '" y1="' +
        centerY +
        '" x2="' +
        x +
        '" y2="' +
        y +
        '"></line>'
    );
  });
});
