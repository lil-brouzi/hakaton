import { EVENT } from "./eventBlock";


new EVENT('Сбор мусора', 'dkdkldklkldklkdlkldklkdlkldkldklkldkldklkdlkldklkldkl', 'Смазчиков 3', '01.01.2023', '02.01.2023', '56.85930498828501', '60.619874133537145')

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

