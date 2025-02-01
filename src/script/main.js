// Add click effect to buttons
document.querySelectorAll('.neo-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translate(2px, 2px)';
        button.style.boxShadow = '4px 4px 0px #000';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
        button.style.boxShadow = '8px 8px 0px #000';
    });
});


var first = new Typed(".person1",{
    strings : ["Aris Sopian", "301230047"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var second = new Typed(".person2",{
    strings : ["Abdul Rahman Ibrahim", "301230001"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var third = new Typed(".person3",{
    strings : ["Indra Mulyadi", "301230005"],
    loop : true,
    typeSpeed : 90,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var fourth = new Typed(".person4",{
    strings : ["Randi Irwana", "301230032"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var fifth = new Typed(".person5",{
    strings : ["Alifa Izzatunnisa", "301230028"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var sixth = new Typed(".person6",{
    strings : ["Rima Aidah", "301230035"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})

var dosen = new Typed(".dosen",{
    strings : ["Siti Dewi Rahayu Septiani, S.Pd., M.Pd."],
    loop : true,
    typeSpeed : 80,
    backSpeed : 80,
    startDelay : 800,
    backDelay : 15
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})
sr.reveal('.neo-button',{delay:50});
sr.reveal('.profile-card',{delay:50});
sr.reveal('.section-title',{delay:50});