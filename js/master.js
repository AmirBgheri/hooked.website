let currentIndex = 0;
const sections = document.querySelectorAll(".jump");
const total = sections.length;
const maintxt = document.getElementById("maintxt");
let freeScroll = false;
let scrollLocked = false; // 🔒 برای قفل کردن اسکرول

function goToSection(index) {
  if (index < 0 || index >= total) return;
  currentIndex = index;

  window.scrollTo({
    top: window.innerHeight * currentIndex,
    behavior: "smooth"
  });

  // انیمیشن بخش دوم
  if (currentIndex === 1) {
    const img = document.getElementById("imgemote");
    img.classList.remove("lg:translate-y-[4000px]");
    img.classList.add("translate-y-0");
    maintxt.classList.remove("opacity-100", "translate-y-[-50%]");
    maintxt.classList.add("opacity-0", "translate-y-full");
  } else {
    maintxt.classList.remove("opacity-0", "translate-y-full");
    maintxt.classList.add("opacity-100", "translate-y-[-50%]");
  }

  // انیمیشن بخش آخر
  if (currentIndex === total - 1) {
    const img = document.getElementById("imgemote");
    const underimg = document.querySelector(".underimg");
    const hookvision = document.querySelector(".hookvision");
    const card = document.querySelectorAll('.card');
    const lefttxt = document.getElementById("lefttxt");
    const rightttxt = document.getElementById("righttxt");
    const howsec = document.querySelector('.how');

    img.classList.remove("opacity-100");
    underimg.classList.remove("opacity-100");
    hookvision.classList.remove("md:opacity-0");
    // hookvision.classList.add("opacity-100");

    setTimeout(() => {
      hookvision.classList.remove("translate-y-[100vh]");

      setTimeout(() => {
        howsec.classList.remove("opacity-0", "lg:translate-y-0");
        howsec.classList.add("lg:translate-y-[100vh]", "opacity-100");
        img.classList.add("opacity-0");
        // underimg.classList.add("opacity-0");
      }, 100);
    }, 700);

    setTimeout(() => {
      card.forEach((val) => {
        val.classList.remove("scale-0");
        val.classList.add("scale-100");
      });
      lefttxt.classList.remove("opacity-0", "translate-x-[-100px]");
      rightttxt.classList.remove("opacity-0", "translate-y-[100px]");
    }, 200);

    freeScroll = true;
  }
}

// 🛑 قفل کردن اسکرول بعد از هر حرکت برای مدتی
window.addEventListener("wheel", (e) => {
  if (freeScroll || scrollLocked) return;

  e.preventDefault();
  scrollLocked = true; // قفل کردن

  if (e.deltaY > 0) {
    goToSection(currentIndex + 1);
  } else {
    goToSection(currentIndex - 1);
  }

  // باز کردن قفل بعد از 1.5 ثانیه (یا هر مدت که بخوای)
  setTimeout(() => {
    scrollLocked = false;
  }, 300); // ← این عدد رو می‌تونی تنظیم کنی
}, { passive: false });

document.addEventListener("DOMContentLoaded", () => {
  // --- charts ---
  const chart = document.querySelector('.charts');
  const nemodar = document.querySelectorAll(".chtransition");

  if (chart) {
    const ioChart = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nemodar.forEach(el => {
            el.classList.remove('opacity-0', 'scale-0');
            el.classList.add('opacity-100', 'scale-100');
          });
          console.log('Chart section is visible (IO)!');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    ioChart.observe(chart);
  }

  // --- box ---
  const box = document.querySelector('.box');
  const cards = document.querySelectorAll('.box .chtransition');

  if (box) {
    const ioBox = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => {



            if (entry.isIntersecting) {
              cards.forEach((card, i) => {
                setTimeout(() => {
                  card.classList.remove('translate-x-[5000px]');

                  if (i % 2 === 0) {
                    // کارت‌های زوج: از راست بیان
                    card.classList.add('translate-x-[50px]');
                  } else {
                     card.classList.remove('translate-x-[-5000px]');

                    // کارت‌های فرد: از چپ بیان
                    card.classList.add('-translate-x-[50px]');
                  }
                }, i * 500);
              });
            }

          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .5 });

    ioBox.observe(box);
  }
});





var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});




const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Community', 'Team', 'Private Sale', 'Binance Sale', 'Treasury'],
    datasets: [{
      data: [25, 5, 20, 20, 30],
      backgroundColor: ['#bbfb02', '#bccbff', '#007aff', '#96d8ed', '#36f3ba']
    }]
  },
  options: {
    plugins: {
      legend: {
        onClick: (e, legendItem, legend) => {
          const index = legendItem.index;
          const label = legend.chart.data.labels[index];
          console.log(`روی ${label} کلیک شد ✅`);
          // اینجا هر کاری بخوای می‌تونی بکنی
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("stackedLine");

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Dec 2022', 'Feb 2024', 'Apr 2025', 'Jun 2026', 'Aug 2027', 'Oct 2028', 'Dec 2029'],
      datasets: [
        {
          label: 'Category A',
          data: [10, 20, 40, 60, 80, 95, 100],
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54,162,235,0.6)',
          fill: true,
        },
        {
          label: 'Category B',
          data: [5, 15, 25, 35, 50, 65, 70],
          borderColor: '#4BC0C0',
          backgroundColor: 'rgba(75,192,192,0.6)',
          fill: true,
        },
        {
          label: 'Category C',
          data: [2, 10, 18, 28, 38, 45, 50],
          borderColor: '#99CCFF',
          backgroundColor: 'rgba(153,204,255,0.6)',
          fill: true,
        }
      ]
    },

    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: true,
      plugins: {
        title: {
          display: true,

        }
      },
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true
        }
      }
    }
  });
});

var swiper = new Swiper(".mySwiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },   // موبایل
    640: { slidesPerView: 2 },   // تبلت
    1024: { slidesPerView: 3 },  // دسکتاپ
  },
});
