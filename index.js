const rod = document.createElement('div')
const div = document.createElement('h4')
const div1 = document.createElement('div')
const ul = document.createElement('ul')
const item1 = document.createElement('a')
const item2 = document.createElement('a')
const item3 = document.createElement('a')

rod.style.display = 'flex'
rod.style.justifyContent = 'center'


div1.style.display = 'flex'
div1.style.justifyContent = 'center'


div.style.border = '2px solid red'
div.style.borderRadius = '10px'
div.style.boxSizing = 'border-box'
div.style.padding = '10px'
div.textContent = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore eum culpa perspiciatis adipisci voluptate.'
div.style.width = '300px'

ul.style.width = '300px'
ul.style.display = 'flex'
ul.style.justifyContent= 'space-Around'
ul.style.padding = '0px'
ul.style.margin = '0px'







item1.textContent = 'intocode'
item1.href = 'https://intocode.ru/'

item2.textContent = 'google'
item2.href = 'https://www.google.com/'

item3.textContent = 'instagram'
item3.href = 'https://www-instagram-com.translate.goog/accounts/login/?next=https://www.instagram.com/&_x_tr_sl=en&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=sc'

ul.append(item1, item2, item3)
document.body.prepend(div1)
document.body.prepend(rod)
rod.append(div)
div1.append(ul)



