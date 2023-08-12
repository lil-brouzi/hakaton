// класс событий
class Event {
    constructor(type, name, description, startDate, lastDate, address,  listParticipants, coordinateX, coordinateY) {
        this.name = name,
        this.description = description,
        this.startDate = startDate,
        this.lastDate = lastDate,
		this.type = type,
		this.address = address,
		this.listParticipants = listParticipants,
		this.coordinateX = coordinateX,
		this.coordinateY = coordinateY
           
    }

    initContentEvent() {
        return `
		<div class="content-event">
			<img src="/src/assets/eventimg.png" alt="">
			<div class="content-event-info">
				<h2>${this.name}</h2>
				<div class="content-event__date">
					${this.startDate} - ${this.lastDate}
				</div>
				<div class="content-event__descript">
					${this.description}
				</div>
			</div>
		</div>
		`
    }

	initCarouselEvent() {
		return `
			<a  class="carousel-event">
				<h3 class="carousel-event__title">Название события</h3>
				<div class="carousel-event__date">18.08.2023</div>
			</a>
		`
	}
}



class User {
	constructor(firstName, lastName, patronymic, age, passportData, avatar) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.patronymic = patronymic,
		this.age = age,
		this.passportData = passportData,
		this.avatar = avatar
	}

	toHTML() {
		return `нет юзера`
	}
}

class TopUser extends User {
	constructor(firstName, lastName, patronymic, age, passportData, avatar) {
		super(firstName, lastName, patronymic, age, passportData, avatar)
	}

	toHTML() {
		return `
			<div class="topboard__user">
				<div class="user__image">
					<img src="${this.avatar}" alt="">
				</div>
				<div class="user__name">${this.lastName} ${this.firstName} ${this.patronymic}</div>
			</div>
		`
	}
}
// Создание моделей событий
const modelEvent =  [ 
    new Event(
		'тип события',
		'Название события',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'тип события',
		'Название события',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'тип события',
		'Название события',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'тип события',
		'Название события',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
]

const modelTopUser = [
	new TopUser('Иван', 'Иванов', 'Иванович', '21', [], '/src/assets/eventimg.png'),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png'),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png'),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png'),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png')
]
console.log(modelTopUser);
function initModelToHTML(model, el) {
	model.forEach(block => {
		el.insertAdjacentHTML('beforeend', block.toHTML())
		
	})
}
// Загрузка моделей событий на страницу
const contentEvents = document.querySelector('#content-events')
modelEvent.forEach(block => {
	contentEvents.insertAdjacentHTML('beforeend', block.initContentEvent())
})
// Загрузка модели топ пользователей
const topboradUsers = document.querySelector('#topborad__users')
initModelToHTML(modelTopUser, topboradUsers)


const myProfile = document.querySelector('#myProfile')


// Yandex Map
let center = [56.8357751144017,60.61140330780871]

function initMap() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 13
	});

	let placemark = new ymaps.Placemark([56.85930498828501,60.619874133537145], {
		balloonContentHeader: 'Кировский район',
		balloonContentBody: 'бади балун',
		balloonContentFooter: `<button>Занять</button>`
	}, {

	})
	map.geoObjects.add(placemark)
}

ymaps.ready(initMap);

