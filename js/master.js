let navigation = document.getElementById('navigation')
let main = document.getElementsByTagName('main')[0]
let clickmenu = document.getElementById('clickmenu')
let dropmenu = document.getElementById('dropmenu')
let menuicon = document.getElementById('menuicon')
let dlinmenu = document.getElementById('dlinmenu')
let navdllink = document.getElementById('navdllink')
let navdl = document.getElementById('navdl')
let dlclick = document.getElementById('dlclick')
let residents = document.getElementById('residents')
let residentsimg = document.getElementById('residentsimg')
let imgs = document.getElementById('imgs')
let sec4 = document.getElementById('sec4')
let imgspar = document.getElementById('imgspar')
let i = ''
navdl.addEventListener('mouseenter', () => {
    dlclick.classList.remove('bg-[#395fd0]')
    dlclick.classList.remove('text-[white]')
    dlclick.classList.add('text-[#395fd0]')
    dlclick.classList.add('bg-[#a9eff6]')
    navdllink.classList.add('h-full')
    navdllink.classList.remove('h-[0px]')
})
navdl.addEventListener('mouseleave', () => {
    dlclick.classList.add('bg-[#395fd0]')
    dlclick.classList.add('text-[white]')
    dlclick.classList.remove('text-[#395fd0]')
    dlclick.classList.remove('bg-[#a9eff6]')
    navdllink.classList.remove('h-full')
    navdllink.classList.add('h-[0px]')
})
dlinmenu.addEventListener('mouseenter', () => {
    dropmenu.classList.remove('h-[0px]')
    dropmenu.classList.add('h-[140px]')
})
dlinmenu.addEventListener('mouseleave', () => {
    dropmenu.classList.add('h-[0px]')
    dropmenu.classList.remove('h-[140px]')
})
document.getElementById('dropmenu').addEventListener('mouseenter', () => {
    dropmenu.classList.remove('h-[0px]')
    dropmenu.classList.add('h-[140px]')
})
document.getElementById('dropmenu').addEventListener('mouseleave', () => {
    dropmenu.classList.add('h-[0px]')
    dropmenu.classList.remove('h-[140px]')
})
menuicon.addEventListener('click', () => {
    i == 1
    if (i % 2) {
        navigation.classList.remove('w-[90%]')
        navigation.classList.add('w-full')
        navigation.classList.remove('ms-[5%]')
        navigation.classList.remove('fixed')
        navigation.classList.remove('top-0')
        navigation.classList.remove('left-0')
        navigation.classList.remove('z-[12]')
        navigation.classList.add('h-[15%]')
        navigation.classList.remove('h-[100px]')
        clickmenu.classList.add('hidden')
        clickmenu.classList.remove('flex')
        i++
    } else {
        navigation.classList.add('w-[90%]')
        navigation.classList.remove('w-full')
        navigation.classList.add('ms-[5%]')
        navigation.classList.add('fixed')
        navigation.classList.add('top-0')
        navigation.classList.add('left-0')
        navigation.classList.add('z-[12]')
        navigation.classList.remove('h-[15%]')
        navigation.classList.add('h-[100px]')
        clickmenu.classList.remove('hidden')
        clickmenu.classList.add('flex')
        i++
    }

})
setTimeout(() => {
    document.getElementById('loadscreen').classList.remove('flex')
    document.getElementById('loadscreen').classList.add('hidden')
    main.classList.add('flex')
    main.classList.remove('hidden')
}, 1000);




main.addEventListener('scroll',()=>{

   let scrollheight =  main.scrollTop
    if((imgs.offsetTop-175) <= scrollheight){
        imgs.style.transform = 'scale(calc(1 + '+((Math.floor(scrollheight-(imgs.offsetTop-175)))/400)+'))'
        imgs.style.opacity='calc(1 - '+((Math.floor(scrollheight-(imgs.offsetTop-175)))/500)+')'
        imgspar.style.transform = 'translateY(-'+((Math.floor(scrollheight-(sec4.offsetTop-850))))+')'
        if((imgs.offsetTop-175) >= scrollheight){
            imgs.style.transform = 'scale(calc(1 - '+((Math.floor(scrollheight-(imgs.offsetTop-175)))/400)+'))'
        imgs.style.opacity='calc(1 + '+((Math.floor(scrollheight-(imgs.offsetTop-175)))/500)+')'
        }
    }
})


// sectin4
// sectin4
// sectin4
// sectin4