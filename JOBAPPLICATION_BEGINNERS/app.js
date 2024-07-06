$(document).ready(function(){
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0,0,0,0.1) 0px 4px 12px");

        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none");
        }
    })
});

const mobile=document.querySelector(".menu-toggle")
const mobileLink=document.querySelector(".navbar-menu")

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("is-active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

// sample
document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.dropdown');

    // Add event listener to each dropdown
    dropdowns.forEach(dropdown => {
        const output = dropdown.querySelector('.output');
        const lists = dropdown.querySelector('.lists');

        // Toggle the dropdown
        output.addEventListener('click', () => {
            lists.style.display = lists.style.display === 'block' ? 'none' : 'block';
            dropdown.classList.toggle('active');
        });

        // Set the selected item and close the dropdown
        lists.querySelectorAll('.items').forEach(item => {
            item.addEventListener('click', () => {
                output.value = item.textContent;
                lists.style.display = 'none';
                dropdown.classList.remove('active');
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.lists').style.display = 'none';
            });
        }
    });
});

// sample

// var navbarHeight=$(".navbar").outerHeight();
// $(".navbar-menu a").click(function(e){
//     var targetHref=$(this).attr("href");
//     $("html,body").animate({
//         scrollTop: $(targetHref).offset().top - navbarHeight
//     }, 1000)
//     e.preventDefault();
//     })



// var swiper=new swiper(".mySwiper",{
//     loop:true,
//     autoplay:{
//         delay:2500,
//         disableOnInteraction:false,
//     },
//     slidesPerView:1,
//     spaceBetween:10,
//     pagination:{
//         el:".swiper-pagination",
//         clickable:true,
//     },
//     breakpoints:{
//         640:{
//             slidesPerView:2,
//             spaceBetween:20,
//         },
//         768:{
//             slidesPerView:3,
//             spaceBetween:40,
//         },
//         1024:{
//             slidesPerView:3,
//             spaceBetween:
//         }
//     }
// });

document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);
    const position = document.getElementById('position').value;

    // Define minimum experience required
    const minimumExperience = 2; // Example value

    // Check if the applicant meets the requirement
    if (experience >= minimumExperience) {
        document.getElementById('result').textContent = `${name}, your application for the ${position} position has been accepted.`;
    } else {
        document.getElementById('result').textContent = `${name}, your application for the ${position} position has been rejected due to insufficient experience.`;
    }

    // Clear the form
    document.getElementById('jobApplicationForm').reset();
});
