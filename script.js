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




