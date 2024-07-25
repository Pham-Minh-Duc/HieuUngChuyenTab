var tabItem = document.querySelectorAll('.tab-item')
var tabContent = document.querySelectorAll(".tab-content")

console.log(tabContent)
tabItem.forEach((e) => {
    e.addEventListener('click', openTabs)
})


function openTabs(e){
    var btn = e.currentTarget;
    var electronic = btn.dataset.electronic;

    tabContent.forEach((el) => {
        el.classList.remove('active');
    })

    tabItem.forEach((el) => {
        el.classList.remove('active');
    })

    document.querySelector("#" + electronic).classList.add('active');
    btn.classList.add('active');
}






// function openTabs(el) {
//    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
//    var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
//    tabContent.forEach(function(el) {
//       el.classList.remove("active");
//    }); //lặp qua các tab content để remove class active

//    tabLinks.forEach(function(el) {
//       el.classList.remove("active");
//    }); //lặp qua các tab links để remove class active

//    document.querySelector("#" + electronic).classList.add("active");
//    // trả về phần tử đầu tiên có id="" được add class active
   
//    btn.classList.add("active");
//    // các button mà chúng ta click vào sẽ được add class active
// }