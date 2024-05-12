let storages = document.querySelector('.storage_menu')

let models = document.querySelector('.box_menu')

let circle_colors = document.querySelector('.colors_menu')

let box = document.querySelector('.box')

let cost_txt = document.querySelector('.cost')

let inner_box_iphone = document.querySelector('.under_box')




let right_bottom = document.querySelector('.btn_right')
let left_bottom = document.querySelector('.btn_left')


let prices_model_arr = [

    28999000,
    34999000

]

let prices_storage_arr = [

    28999000,
    31999000,
    37999000,
    43999000

]


let price_model = 0

let price_storage = 0

let colors = {

    titanium : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846362456', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363675', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636437'],

    blue : ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360208', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011635011', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636681'],

    white: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846365217', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367022', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636748'],

    black: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357050', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011634662', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_AV3?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693011636618']

}


let storage_elements = storages.children 

let arr = []


for (let i = 0; i < storage_elements.length; i++){
    let elem = storage_elements[i]
    
    elem.onclick = () => {

        price_storage = 0
        price_storage = prices_storage_arr[i]   

        
        
        for (let item of arr) {
            storages.lastElementChild.style.border = 'none'
            item.style.border = '1px solid black'
         
        }
        arr.push(elem)
        elem.style.border = '2px solid blue' 
        storages.lastElementChild.style.border = 'none'
        
        
        cost_txt.classList.remove('cost_anime')

        setTimeout (function() {

            cost_txt.classList.add('cost_anime')

        }, 200)





        cost_txt.innerHTML = price_model + price_storage + 'đ'

        
    }
}


let arr2 = []

let model_elements = models.children

for (let i = 0; i < model_elements.length; i++){
    

    let elem = model_elements[i]

    models.lastElementChild.style.border = 'none'

    elem.onclick = () => {

        price_model = 0
        price_model = prices_model_arr[i]

        if(i == 0){
            inner_box_iphone.innerHTML = 'iPhone 15 pro'
        }
        else {
            inner_box_iphone.innerHTML = 'iPhone 15 pro Max'
            inner_box_iphone.style.left = '565px'
        }
    

        for(let item of arr2) {
            item.style.border = '1px solid black'   
            
        }
        arr2.push(elem)
        elem.style.border = '2px solid blue'
        models.lastElementChild.style.border = 'none' 

        cost_txt.classList.remove('cost_anime')

        setTimeout (function() {

            cost_txt.classList.add('cost_anime')

        }, 200)

        cost_txt.innerHTML = price_model + price_storage + 'đ'

    }
    
}

let childs_colors = circle_colors.children

let arr3 = []



for(let item of childs_colors) {

    item.onclick = () => {

        for(let obj of arr3) {
            
            obj.style.border = 'none'
        }
        arr3.pop()
        arr3.push(item)
        item.style.border = '2px solid blue'

        right_bottom.style.opacity = '0.7'
        right_bottom.style.cursor = 'pointer'
        left_bottom.style.opacity = '0.7'
        left_bottom.style.cursor = 'pointer'

    }
   
    
}


let n = 0


function buttons(i) {

    right_bottom.onclick = () => {
      
        if (n == colors.black.length - 1) {
            n = 0
        }
    
        n = n  + 1
    
        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'  
    }
    
    left_bottom.onclick = () => {
        if(n == 0) {
            n = 3
        }
        else {
            n = n - 1
        }
        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'
    }    
}



for(let i = 0; i < childs_colors.length; i++){  
  
    childs_colors[i].addEventListener('click', function() {

      
        box.style.backgroundImage = 'url('+ colors[childs_colors[i].id][n] +')'

        buttons(i)
 
    })

    childs_colors[i].addEventListener('mouseover', function() {
 
        let txt_change_color = document.querySelector('.change_color')
        
        let color = childs_colors[i].id.charAt().toUpperCase()

        let color2 = childs_colors[i].id.slice(1)

        txt_change_color.innerHTML = '-' + ' ' + color + color2 + ' ' +'Titanium'

        if (i == 0) {
            txt_change_color.innerHTML = '- Natural Titanium'
        }
    })
}

let link = document.getElementById('first_link')

link.onclick = () => {

    window.location.href = 'https://support.apple.com/vi-vn'
}

link.onmouseover = () => {

    let plus = document.querySelector('.plus_icon')

    plus.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAzdJREFUaEPtmUuoTlEUx39XijAwQIgQIe+B9yMjzwyUSEpeI1EMPMtMSUQZMFBeGYiERFGiPPIueQw88ioMDDyLCdl/ne927rHP2fvb3z7fdeuu2b1n7bV+Z529115rfQ20QGlogcy0Qqe+Wh+gB/ABeBP7a8aIdG9gDjAdGAYMsEC+AB4DF4BzwLtaXqQW6GXAOmBIAMAjYCdwNGBt0J5WRHcAI0McZtY8AFYDN6qxVU2k2wIHgcXVOPDU3Q2sB3776PtCdwXOmj053sdooM4lYAHwybXeB7o7cAtQRihbngJjga9FjlzQ7YA7wIiyaVP2r5g9Pg34lefTBX0SmFdH4IqrfcCqEOiFwLFmAK64nApctfkvirQuhP4B0BeB7al1m4AZAXbum4todDXQKwF9ohA5AixNLTwMLAkxlGzNU9m1eZF+C+h6DpGY0LdtadYGPSbJGCHAWhMTWvZ6JoVXI48NehuwOZS4BGhd83vTPDZoVWND/yNoHeyZRdB6CSV1V/4ueqfY20M1ubZI7vboYpL6R48o64D8zNFTzZxNeU0ilVrXHhjn4a9JELMRVRGvWtcl/Uxae+1S8nje16TDVx56ui9eVvSy0JOA6x5G6g09ISna/qJloQcCqrRcUm9ocT3Pi3Qn4JuLGNgDfM7RUzdyJvVsrvl7VI5uZ1M/r/Hw1wH4kQet/383/VtHD0N5KrGzxxdAL9cottSmzKBCPFRiQ6t/nOyC3gJsDSUu4UbcmDTShZH2TXv12h5q81TAFULroU6qbeji8wFibo+HtlFF3nW93JSmB3wILToxoRfZuqc86DbAE2BwAHgsaBVuw23+iwojNbRqbJtLZiWzv3/8u6q5Eybi85uB+pA5fNqiVnFBa+5xDVA3Uy+5CUypZe4hUE2Y7gK96kCtCYAutsLRmCvSFc5uJvWcBiaWCH456b7zahpnnraxaWq630z2NZeOLbuADbGnpmlIdSEaiOvmrFXumWpxbZnz6SzgimSmPCiAXDeduv7jAWtramAr/tQQzE5+c1EXbxulPUvauPNJ7lWzGiy+B7FaB5Vft95ni51qDdn0y4KOwZZroxW61PCmjP8BoTuJLllfGWIAAAAASUVORK5CYII=")'
}


link.onmouseleave = () => {

    let plus = document.querySelector('.plus_icon')

    plus.style.transition = '0.2s'

    plus.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABI5JREFUaEPtmWnoblMUxn+XQkjmyDzPQ2SMJBkTZUpCxiSKzDJHMkQoQ+ZCMmQIIUJkFjJmyJShzBH5QOzf7Zzb+u+7z3vOe877v7p118dz9l7rOWuvvdaz1pnBXCgz5kLMzAMdTm0VYHngO+DLSZ/mJDy9ErAnsAuwIbBmAeSnwHvAE8CjwDdDPmQI6MOBU4D1ewB4F7gcuKPH3l4xrUcvAzbpYzDb8zZwPPDiOLrG9fQNKU6PGWHgFeBr4AfgZ2BJYBlgxRQaW4/YdyVwclfgXUEvCzwEbFNQbKzeDtwNfDvC8ArAQeliGlbrFdY9DewP/NoGvgvo5QA9aEaI4tGeDzzcZqTwfh/gogL4j4Atgd9G6WwDvSDwGrBxpuRi4KweYOMWbV8LHJvpeTbF+M7AP03620DfD+wbNv+bYvYo4NaBgOP204BLYEpSuC7di+P6gD6witO413g0fictJwFXZEp3AJ4vGWry9PyABWHVsOn0KtW1Ad4NOCMs0osWlTa5FNDrtRiWW40D2jjziGrxi/3yLnJYurS3hYVdT0cHmolisTI0H8iNNnn6K8DyXMu2wMtdEAN9Qat+P+C+YOfVUn4vgd48cYk3wsZngJ06AnbZENDu19sbBHsWpilcpQTadHZm2HTomBxhKGjj2viuxTJvapwlJdD5ly6WSuzvc9DTssRPgr0nU3Hzco8EbS6u5TlgxzEATyI81PExsFZlV2ogBWgEvVRiXT+G93el1HdwAbTkZ6GGj9ErpsdaPOqmlPdXRRFyVa7ftXqoExcA/q4X5eEhkfkgaLg6EZgTC+C+KHCRMQ9k5nK7mlgLah03A0cGhWsAnzWBlsW9FBZLas75H0DnyUBckraZknt6bUCmVcuNDfx5uj2t3aMDDnHNupw56EWzTPEIsFfB04bM4g3xsCmwd3gndZXGlkTufFXhxWOJXe4Rni+SSvyfTZ72+R+JYyxcLbCXy2lpW+wOzdPq917VjYIftkQ0WsrTlk6JeC2Wc1uorjIU9Grx0lX943ZtoM8GLgyLTki93jVdEU+gjJ+ascnZ2GXJ09Z9q2ItbwLyka4y1NPvZ0xvdeDzNk/73psahy5eisc7oh4COmd575RGFU3U9IhETW8JIN8CNpsDoD8E1g127N7t8qdIE+j5UjvvMUUFF6Sddt9t0tfTpj7vTy2G6EYlY6MaW7sGG9soNrXxBNo+oOt7qbBVMMruTZylrRu/txqg1MokL3bJ13dF02HdeYUTtF0zRIvSBtq5xwvAFtluZ3mRyXXANtsSQ/CmAjjbuu2HzD205ITp9WoeFy17OfWSpX5ccTxxbmHC5ATAwvbLKIVtnq73Ost7ELDBzcUL43HeCXw/wphjtUOq4iPVzOWpVL4PmNQsLyr3OL2MTSKttdNwavoTsHQ1NV25EGJRh41CnJWMPLmuno5K7EwciDv1Hyp2/TLGaZ1PR5B2FvKEdXogt9KZ4u7psbfXn4DcjqzMMu8fAnlLKV5tVKW58mT7P38g9ZY+4dHFWP13y/h2WjVRmS7QEwWZK5sHelrdG5T/BwTj0y4h4QA+AAAAAElFTkSuQmCC")'
}

let link2 = document.getElementById('link2')

link2.onclick = () => {

    window.location.href = 'https://support.apple.com/vi-vn'
}


link2.onmouseover = () => {

    let plus2 = document.querySelector('.plus_icon2')

    plus2.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAzdJREFUaEPtmUuoTlEUx39XijAwQIgQIe+B9yMjzwyUSEpeI1EMPMtMSUQZMFBeGYiERFGiPPIueQw88ioMDDyLCdl/ne927rHP2fvb3z7fdeuu2b1n7bV+Z529115rfQ20QGlogcy0Qqe+Wh+gB/ABeBP7a8aIdG9gDjAdGAYMsEC+AB4DF4BzwLtaXqQW6GXAOmBIAMAjYCdwNGBt0J5WRHcAI0McZtY8AFYDN6qxVU2k2wIHgcXVOPDU3Q2sB3776PtCdwXOmj053sdooM4lYAHwybXeB7o7cAtQRihbngJjga9FjlzQ7YA7wIiyaVP2r5g9Pg34lefTBX0SmFdH4IqrfcCqEOiFwLFmAK64nApctfkvirQuhP4B0BeB7al1m4AZAXbum4todDXQKwF9ohA5AixNLTwMLAkxlGzNU9m1eZF+C+h6DpGY0LdtadYGPSbJGCHAWhMTWvZ6JoVXI48NehuwOZS4BGhd83vTPDZoVWND/yNoHeyZRdB6CSV1V/4ueqfY20M1ubZI7vboYpL6R48o64D8zNFTzZxNeU0ilVrXHhjn4a9JELMRVRGvWtcl/Uxae+1S8nje16TDVx56ui9eVvSy0JOA6x5G6g09ISna/qJloQcCqrRcUm9ocT3Pi3Qn4JuLGNgDfM7RUzdyJvVsrvl7VI5uZ1M/r/Hw1wH4kQet/383/VtHD0N5KrGzxxdAL9cottSmzKBCPFRiQ6t/nOyC3gJsDSUu4UbcmDTShZH2TXv12h5q81TAFULroU6qbeji8wFibo+HtlFF3nW93JSmB3wILToxoRfZuqc86DbAE2BwAHgsaBVuw23+iwojNbRqbJtLZiWzv3/8u6q5Eybi85uB+pA5fNqiVnFBa+5xDVA3Uy+5CUypZe4hUE2Y7gK96kCtCYAutsLRmCvSFc5uJvWcBiaWCH456b7zahpnnraxaWq630z2NZeOLbuADbGnpmlIdSEaiOvmrFXumWpxbZnz6SzgimSmPCiAXDeduv7jAWtramAr/tQQzE5+c1EXbxulPUvauPNJ7lWzGiy+B7FaB5Vft95ni51qDdn0y4KOwZZroxW61PCmjP8BoTuJLllfGWIAAAAASUVORK5CYII=")'
}



link2.onmouseleave = () => {

    let plus2 = document.querySelector('.plus_icon2')

    plus2.style.transition = '0.2s'

    plus2.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAABI5JREFUaEPtmWnoblMUxn+XQkjmyDzPQ2SMJBkTZUpCxiSKzDJHMkQoQ+ZCMmQIIUJkFjJmyJShzBH5QOzf7Zzb+u+7z3vOe877v7p118dz9l7rOWuvvdaz1pnBXCgz5kLMzAMdTm0VYHngO+DLSZ/mJDy9ErAnsAuwIbBmAeSnwHvAE8CjwDdDPmQI6MOBU4D1ewB4F7gcuKPH3l4xrUcvAzbpYzDb8zZwPPDiOLrG9fQNKU6PGWHgFeBr4AfgZ2BJYBlgxRQaW4/YdyVwclfgXUEvCzwEbFNQbKzeDtwNfDvC8ArAQeliGlbrFdY9DewP/NoGvgvo5QA9aEaI4tGeDzzcZqTwfh/gogL4j4Atgd9G6WwDvSDwGrBxpuRi4KweYOMWbV8LHJvpeTbF+M7AP03620DfD+wbNv+bYvYo4NaBgOP204BLYEpSuC7di+P6gD6witO413g0fictJwFXZEp3AJ4vGWry9PyABWHVsOn0KtW1Ad4NOCMs0osWlTa5FNDrtRiWW40D2jjziGrxi/3yLnJYurS3hYVdT0cHmolisTI0H8iNNnn6K8DyXMu2wMtdEAN9Qat+P+C+YOfVUn4vgd48cYk3wsZngJ06AnbZENDu19sbBHsWpilcpQTadHZm2HTomBxhKGjj2viuxTJvapwlJdD5ly6WSuzvc9DTssRPgr0nU3Hzco8EbS6u5TlgxzEATyI81PExsFZlV2ogBWgEvVRiXT+G93el1HdwAbTkZ6GGj9ErpsdaPOqmlPdXRRFyVa7ftXqoExcA/q4X5eEhkfkgaLg6EZgTC+C+KHCRMQ9k5nK7mlgLah03A0cGhWsAnzWBlsW9FBZLas75H0DnyUBckraZknt6bUCmVcuNDfx5uj2t3aMDDnHNupw56EWzTPEIsFfB04bM4g3xsCmwd3gndZXGlkTufFXhxWOJXe4Rni+SSvyfTZ72+R+JYyxcLbCXy2lpW+wOzdPq917VjYIftkQ0WsrTlk6JeC2Wc1uorjIU9Grx0lX943ZtoM8GLgyLTki93jVdEU+gjJ+ascnZ2GXJ09Z9q2ItbwLyka4y1NPvZ0xvdeDzNk/73psahy5eisc7oh4COmd575RGFU3U9IhETW8JIN8CNpsDoD8E1g127N7t8qdIE+j5UjvvMUUFF6Sddt9t0tfTpj7vTy2G6EYlY6MaW7sGG9soNrXxBNo+oOt7qbBVMMruTZylrRu/txqg1MokL3bJ13dF02HdeYUTtF0zRIvSBtq5xwvAFtluZ3mRyXXANtsSQ/CmAjjbuu2HzD205ITp9WoeFy17OfWSpX5ccTxxbmHC5ATAwvbLKIVtnq73Ost7ELDBzcUL43HeCXw/wphjtUOq4iPVzOWpVL4PmNQsLyr3OL2MTSKttdNwavoTsHQ1NV25EGJRh41CnJWMPLmuno5K7EwciDv1Hyp2/TLGaZ1PR5B2FvKEdXogt9KZ4u7psbfXn4DcjqzMMu8fAnlLKV5tVKW58mT7P38g9ZY+4dHFWP13y/h2WjVRmS7QEwWZK5sHelrdG5T/BwTj0y4h4QA+AAAAAElFTkSuQmCC")'
}
