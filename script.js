function toggleMode(){
    const html = document.documentElement
    //em js, quando colocamos o document é a representação do nosso documento em formato objeto em js, e quando adicionamos o ., estamos acessando propriedades e funcionalidades dentro do doc. Nesse caso, acessamos o html com o documentElement

    // if (html.classList.contains('light')){
    //     html.classList.remove('light')
    // }
    // else {
    //     html.classList.add('light')
    // }

    //no js, a classlist é a lista de classe, nesse caso, perguntamos ao js, se no html contem (contains) a classe light. e com isso, utilizamos as condições do if e else

    //de forma mais simples, para executar essa tarefa, podemos utilizar uma função já pronto do js: toggle.
    //ele executa o mesmo raciocinio do if/ else

    html.classList.toggle("light")


    //também é possível trocar a foto por js:

    const img = document.querySelector("#profile img")
    // aqui procuramos a tag img, procuramos o seletor do css profile img, onde foi efetuado a edição da imagem

    //criamos uma condição
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar.png")
        //aqui, ele irá alterar a imagem existem por essa nova imagem, no caso é a mesma.
    }
    else {
        img.setAttribute("src", "./assets/avatar.png")
    }



    
}
