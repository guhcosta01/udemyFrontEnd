//    //Criando Funções

    // forma 1

    function MinhaFuncao(){

        console.log('testando');
    }

    MinhaFuncao();

    // forma 2

    const minhaFuncaoEmVariavel = function(){

        console.log('testando 2');
    }


    minhaFuncaoEmVariavel();

    // forma 3

    function funcaoComParametro(txt){
        console.log(`imprimindo: ${txt}`);

    }

    funcaoComParametro( "imprimindo alguma coisa"); 


    funcaoComParametro("outra função")


    //RETURN


    const a = 10
    const b = 20
    const c = 30
    const d = 40

    function soma(n1,n2){
        return  n1 + n2 ; 
    }

    const resultando = soma(a,b);

    console.log(resultando)

    console.log(c + d);
    

    // funcao Escopo


    let y = 10

    function testandoEscopo(){

    let y = 20
    console.log(`Y Dentro Da Funcao é ${y}`);
    }

    testandoEscopo();

    

    console.log(`Y Fora da funcao é ${y} `);

    testandoEscopo();

    // Escopo Alinhado

    let m = 10


    function escopoAlinhado(){
        let m = 20;
        
        if(true){
            let m = 40;
            console.log(m);
            if(true){
                m = 30;
                console.log(m);
            }
        }
        console.log(m);
    }

    escopoAlinhado()

    console.log(m);

    // ARROW FUCTION

    const testeArrow = () =>{

        console.log("testando Fuction Arrow");
    } 
    testeArrow()


    const parOuImpar = (n) =>{
    if( n % 2 === 0){
        console.log("par")    
        return
    }
        
    console.log("impar")

    }

    parOuImpar(10);
    parOuImpar(3);

    // Mais Sobre  Arrow Fuction

    const raizQuadrada = (x) =>{ //nao é preciso Escrever uma fuction 
        return  x * x; 
        
    }
    console.log(raizQuadrada(5)) 


    // Function Arrow Com Em Uma linha

    const raizQuadrada2 =(x) => x * x 

    console.log(raizQuadrada2(10))

    const helloWord = () => console.log("Hello Word")

    helloWord()


    // parametro opcional

    const greeting = (name) => {

            if(!name){ //Com esse ! antes do name estou definindo que o name (False) Passe a Ser (True) pra poder entra esse if
                console.log("ola,No Nome")
                return
            }

            console.log(`ola,${name}`)


    }
    greeting();

    greeting("gustavo");


    // valor default



    const customGreenting = (name ,greet = "ola" ) => {

        return `${greet}, ${name}` 

    }

    console.log(customGreenting("Gustavo"))

    console.log(customGreenting( "Araujo" , "Bom dia!")) //Aqui ele vai sobreEscrever os Valores que passei antes


    // valor reapeat

    const repeatTxt = (text, repeat = 3)  => {

        for ( let i = 0; i < repeat; i++){

            console.log(text);


        }
                
    }
    repeatTxt("testando")

    repeatTxt("repita agora 10 vezes" , 10)



