//Yandex Map
function initMap(coordinateX,coordinateY) {
	let map = new ymaps.Map('map', {
		center: [coordinateX, coordinateY],
		zoom: 13
	});

	let placemark = new ymaps.Placemark([coordinateX,coordinateY], {
		balloonContentHeader: 'Кировский район',
		balloonContentBody: 'бади балун',
		balloonContentFooter: `<button>Занять</button>`
	}, {

	})
	map.geoObjects.add(placemark)
}
ymaps.ready(initMap);
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
			<div id='map'></div>
			<div class="content-event-info">
				<h2>${this.name}</h2>
				<div class="content-event__date">
					${this.startDate} - ${this.lastDate}
				</div>
				<div class="content-event__address">
					${this.address}
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
		'Сортировка мусора',
		'Сортировка мусора',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'Плоггинг',
		'Плоггинг',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'Субботник',
		'Субботник',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.61140330780871'
		
	),
	new Event(
		'Помощь заповедникам',
		'Помощь заповедникам',
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
function initModelToHTML(model, el) {
	model.forEach(block => {
		if (el != null) {
			el.insertAdjacentHTML('beforeend', block.toHTML())
		}
	})
}
// Загрузка модели топ пользователей
const $topboradUsers = document.querySelector('#topborad__users')
initModelToHTML(modelTopUser, $topboradUsers)

// Загрузка моделей событий на страницу
const $contentEvents = document.querySelector('#content-events')
const $sortingGarbage = document.querySelector('#sortingGarbage')
const $plogging = document.querySelector('#plogging')
const $cleaningDay = document.querySelector('#cleaningDay')
const $assistance = document.querySelector('#assistance')


modelEvent.forEach(block => {
	if ($contentEvents != null){
		$contentEvents.insertAdjacentHTML('beforeend', block.initContentEvent())
	}
})


function filterEvent(sort, type) {
	sort.addEventListener('click', () => {
		$contentEvents.innerHTML = ''
		modelEvent.forEach(block => {
			if (block.type === type && $contentEvents != null) {
				$contentEvents.insertAdjacentHTML('beforeend', block.initContentEvent())
			}
		})
	})
}


filterEvent($plogging, 'Плоггинг')
filterEvent($sortingGarbage, 'Сортировка мусора')
filterEvent($cleaningDay, 'Субботник')
filterEvent($assistance, 'Помощь заповедникам')


const $myProfile = document.querySelector('#myProfile')
