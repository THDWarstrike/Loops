var muttonBurgers = 0;
var totalNeeded = 100

function muttonButton() {
    var totalNeeded = prompt('How many mutton burgers wpuld you like to make')
    while(muttonBurgers < totalNeeded){
        console.log(muttonBurgers + " Mutton Burgers Made.")
        
        if(muttonBurgers == Math.ceil(totalNeeded * 0.5)){
            console.log('Whoooooooa you\'re half way there!')
        }
        
        
                
        
        muttonBurgers++
    }

}


