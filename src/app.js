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

    toHTML() {
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

// Загрузка моделей событий на страницу
const ContentEvents = document.querySelector('#content-events')
modelEvent.forEach(block => {
	ContentEvents.insertAdjacentHTML('beforeend', block.toHTML())
	
})
    


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

