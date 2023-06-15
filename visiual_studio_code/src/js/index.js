(window.onload=function(){
    console.log("----")
    const changeNav = ()=>{
        let navs = document.querySelectorAll(".top-bar__option");
        for(let i=0;i<navs.length;i++){
            navs[i].addEventListener("click",(e)=>{
                for(let j=0;j<navs.length;j++){
                    if(navs[j]===e.target){
                        navs[j].classList.add("active");
                    }else{
                        navs[j].classList.remove("active");
                    }
                }
            })
        }
    }
    changeNav();
})();