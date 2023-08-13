

class Appeal {
	constructor(hrefUser, id, hrefResponsible, status, name, description) {
		this.hrefUser = hrefUser, 
		this.id = id,
		this.hrefResponsible = hrefResponsible,
		this.status = status
		this.name = name,
		this.description = description
	}

	initCarouselAppeal() {
		return `
		<a class="carousel-event">
			<h3 class="carousel-event__title">${this.name}</h3>
			<div class="carousel-event__date">${this.status}</div>
		</a>
		`
	}
	
}
// класс статей 
class Article {
	constructor(id, name, description, datePublic) {
		this.id = id, // номер статьи
		this.name = name, // название
		this.description = description // текст
		this.datePublic = datePublic // дата публикации
	}

	initCarouselMyArticle() {
		return `
		<a class="carousel-event">
			<h3 class="carousel-event__title">${this.name}</h3>
			<div class="carousel-event__date">${this.datePublic}</div>
		</a>
		`
	}
	
}

class TopArticle extends Article {
	constructor(id, name, description, datePublic) {
		super(id, name, description, datePublic)
	}

	initTopArticle() {
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
}
// мои статьи подкласс
class MyArticle extends Article {
	constructor(id, name, description, datePublic) {
		super(id, name, description, datePublic)
	}

	initCarouselMyArticle() {
		return `
		<a class="carousel-event">
			<h3 class="carousel-event__title">${this.name}</h3>
			<div class="carousel-event__date">${this.datePublic}</div>
		</a>
		`
	}
	
}
// класс событий
class Event {
    constructor(id, type, name, description, startDate, lastDate, address,  listParticipants, coordinateX, coordinateY, tag) {
        this.id = id
		this.name = name, // название события
        this.description = description, //текст события
        this.startDate = startDate, // дата начала
        this.lastDate = lastDate, // дата конца
		this.type = type, // тип
		this.address = address, // адресс
		this.listParticipants = listParticipants, // список участников
		this.coordinateX = coordinateX, // координата х
		this.coordinateY = coordinateY, // координата у
		this.tag = tag // таг

           
    }
	
	initCarouselEvent() {
		
		return `
		<a id='${this.tag === 'ближайшее' ? 'nearest' : ''}' class="carousel-event">
			<div class="carousel-event__tag">${this.tag}</div>
			<h3 class="carousel-event__title">${this.name}</h3>
			<div class="carousel-event__date">${this.startDate} - ${this.lastDate}</div>
		</a>
		`
	}

    initContentEvent() {
		//Yandex Map


		ymaps.ready(() => {
			let map = new ymaps.Map(`map${this.id}`, {
			center: [this.coordinateX, this.coordinateY],
			zoom: 13
			});

			map.controls.remove('geolocationControl'); // удаляем геолокацию
			map.controls.remove('searchControl'); // удаляем поиск
			map.controls.remove('trafficControl'); // удаляем контроль трафика
			map.controls.remove('typeSelector'); // удаляем тип
			map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
			map.controls.remove('zoomControl'); // удаляем контрол зуммирования
			map.controls.remove('rulerControl'); // удаляем контрол правил
			map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

			let placemark = new ymaps.Placemark([this.coordinateX, this.coordinateY], {
				balloonContentHeader: `${this.name}`,
				balloonContentBody: `${this.address}`,
				balloonContentFooter: `${this.startDate} - ${this.lastDate}`
			}, {

			})
			map.geoObjects.add(placemark)
		});
        return `
		<div class="content-event">
			<div id='map${this.id}' class='map'></div>
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
}


// класс юзер
class User {
	constructor(firstName, lastName, patronymic, age, passportData, avatar,emale, password) {
		this.firstName = firstName, // имя
		this.lastName = lastName, // фамилия
		this.patronymic = patronymic, // отчество
		this.age = age, // лет
		this.passportData = passportData, // пасспорт данные
		this.avatar = avatar // аватар
		this.password = password //pass
		this.emale =emale
	}

	toHTML() {
		return `нет юзера`
	}

}
// топ юзеры подкласс
class TopUser extends User {
	constructor(firstName, lastName, patronymic, age, passportData, avatar,emale, password) {
		super(firstName, lastName, patronymic, age, passportData, avatar,emale, password)
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
// модель мои статьи
const modelMyArticle = [
	new MyArticle(
		1, // ид
		'Название статьи', // название
		'статья', // текст
		'01.01.2023' //дата публикации
	),
	new MyArticle(
		1,
		'Название статьи',
		'статья',
		'01.01.2023'
	),
	new MyArticle(
		1,
		'Название статьи',
		'статья',
		'01.01.2023'
	)
]
// образения модель
const modelAppeal = [
	new Appeal(
		'',
		1,
		'',
		'отправлено',
		'Название обращения',
		''
	),
	new Appeal(
		'',
		2,
		'',
		'отправлено',
		'Название обращения',
		''
	),
	new Appeal(
		'',
		3,
		'',
		'отправлено',
		'Название обращения',
		''
	)
]
// Создание моделей событий
const modelEvent =  [ 
    new Event(
		1,
		'Сортировка мусора',
		'Сортировка мусора',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.827311666120664',
		'60.58080890820305',
		'ближайшее'
		
	),
	new Event(
		2,
		'Плоггинг',
		'Плоггинг',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85150498828501',
		'60.33140330780871',
		''
		
	),
	new Event(
		3,
		'Субботник',
		'Субботник',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.80930498828501',
		'60.61140330780871',
		''
		
	),
	new Event(
		4,
		'Помощь заповедникам',
		'Помощь заповедникам',
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae labore veniam autem omnis natus exercitationem maxime modi facilis totam?',
		'01.01.2023',
		'02.01.2023',
		'Парковая 10',
		[],
		'56.85930498828501',
		'60.60040330780870',
		''
		
	),
]

// модель топ юзеров
const modelTopUser = [
	new TopUser('Иван', 'Иванов', 'Иванович', '21', [], '/src/assets/eventimg.png','dfhgdfhdfh', ''),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png','hdfhdfhdh', ''),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png','hdfhdfhdfh', ''),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png','hdfhdfhdfhd', ''),
	new TopUser('Иван', "Иванов", 'Иванович', '21', [], '/src/assets/eventimg.png','hdfhdfhdfhdfh', '')
]

// рендер страницы
function initModelToHTML(model, el) {
	model.forEach(block => {
		if (el != null) {
			el.insertAdjacentHTML('beforeend', block.toHTML())
		}
	})
}
const $topboradUsers = document.querySelector('#topborad__users')
initModelToHTML(modelTopUser, $topboradUsers)

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

const $carouselEvents = document.querySelector('#carousel-events')

modelEvent.forEach(block => {
	if ($carouselEvents != null){
		$carouselEvents.insertAdjacentHTML('beforeend', block.initCarouselEvent())
	}
})

const $carouselAppeal = document.querySelector('#carousel-appeals')

modelAppeal.forEach(block => {
	if ($carouselAppeal != null){
		$carouselAppeal.insertAdjacentHTML('beforeend', block.initCarouselAppeal())
	}
})

const $carouselMyArticle = document.querySelector('#carousel-myArticles')

modelMyArticle.forEach(block => {
	if ($carouselMyArticle != null){
		$carouselMyArticle.insertAdjacentHTML('beforeend', block.initCarouselMyArticle())
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

