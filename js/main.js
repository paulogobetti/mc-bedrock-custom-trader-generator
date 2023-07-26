let trades = tradeTable.tiers[0].groups[0].trades

const listItems = ( ) => {
	let tbody = document.getElementById('tbody')
	tbody.innerText = ''

	trades.forEach(i => {
		let line = document.createElement('tr')
		let numberCol = document.createElement('td')
		let itemCol = document.createElement('td')
		let qtyCol = document.createElement('td')
		let maxQtyCol = document.createElement('td')
		let removeCol = document.createElement('td')

		let removeButton = document.createElement('input')
		removeButton.type = 'button'
		removeButton.value = 'Remove'
		removeButton.setAttribute('onclick', 'removeItem(' + trades.indexOf(i) + ')')
		removeButton.classList.add('button')

		numberCol.innerHTML = trades.indexOf(i)
		itemCol.innerHTML = i.wants[0].item
		qtyCol.innerHTML = i.wants[0].quantity
		maxQtyCol.innerHTML = i.max_uses

		line.append(numberCol)
		line.append(itemCol)
		line.append(qtyCol)
		line.append(maxQtyCol)
		removeCol.append(removeButton)
		line.append(removeCol)
		tbody.append(line)
	})
}

const addItem = (e) => {
    e.preventDefault()

	let itemToSell = document.getElementById('item-to-sell').value
	let qtyToSell = parseInt(document.getElementById('qty-to-sell').value)
	let itemForTrade = document.getElementById('item-for-trade').value
	let qtyForTrade = parseInt(document.getElementById('qty-for-trade').value)
	let qtyMaxPlayer = parseInt(document.getElementById('qty-max-player').value)

	let item = {
		max_uses: qtyMaxPlayer,
		wants: [
			{
				item: itemToSell,
				quantity: qtyToSell
			}
		],
		gives: [
			{
				item: itemForTrade,
				quantity: qtyForTrade
			}
		]
	}

	trades.push(item)

	listItems()
	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
}

const removeItem = (i) => {
	trades.splice(i, 1)

	listItems()
	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
}

let checkbox = document.querySelectorAll('input[type="checkbox"]')

const getJSON = (e) => {
    e.preventDefault()

	let entityName = document.getElementById('entity-name').value
	let displayedItems = document.getElementById('displayed-items').value

	if(entityName === '' || displayedItems === '') {
		alert('Sorry, all fields need to be filled in.')
	} else {
		entityBehavior.minecraft_entity.description.identifier = 'myname:' + entityName.toLowerCase()
		entityResource.minecraft_client_entity.description.identifier = 'myname:' + entityName.toLowerCase()
		entityResource.minecraft_client_entity.description.textures.default = 'textures/entity/' + entityName.toLowerCase()
		entityResource.minecraft_client_entity.description.geometry.default = 'geometry.' + entityName.toLowerCase()

		entityBehavior.minecraft_entity.components.minecraft_trade_table.display_name = entityName
		entityBehavior.minecraft_entity.components.minecraft_trade_table.table = 'trading/economy_trades/' + entityName.toLowerCase() + '_table.json'

		// entityModel['geometry.' + entityName.toLowerCase()] = entityModel['geometry.init']
		// delete entityModel['geometry.init']

		checkbox.forEach(i => {
			if(i.checked === true && i.id === "spawn-egg") {
				entityBehavior.minecraft_entity.description.is_spawnable = true
			} else if(i.checked === true && i.id === "spawn-summon") {
				entityBehavior.minecraft_entity.description.is_summonable = true
			} else if(i.id === "spawn-egg") {
				entityBehavior.minecraft_entity.description.is_spawnable = false
			} else {
				entityBehavior.minecraft_entity.description.is_summonable = false
			}
		})

		tradeTable.tiers[0].groups[0].num_to_select = parseInt(displayedItems)
	}

	// Criar alerta que não será possível gerar a entidade no jogo caso os dois checkboxes estiverem desmarcados.
	// Continua podendo ser spawnado pelo jogo caso as condições pré-estabelecidas sejam cumpridas (por default o NPC não deve spawnar em nenhum momento).

	listItems()
	document.getElementById('entity-behavior-output').value = JSON.stringify(entityBehavior, '/t', 2)
	document.getElementById('entity-resource-output').value = JSON.stringify(entityResource, '/t', 2)
	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
}

const saveFiles = (e) => {
    e.preventDefault()

	let entityName = document.getElementById('entity-name').value

	let files = [
		{
			// => /behavior_packs/pack_name/entities/entity.json
			name: entityName.toLowerCase() + '.json',
			var: entityBehavior
		},
		{
			// => /resource_packs/pack_name/entity/entity.json
			name: entityName.toLowerCase() + '.json',
			var: entityResource
		},
		{
			// => /behavior_packs/pack_name/trading/economy_trades/entity_table.json
			name: entityName.toLowerCase() + '_table.json',
			var: tradeTable
		},
		{
			// => /resource_packs/pack_name/models/entity/entity.geo.json
			name: entityName.toLowerCase() + '.geo.json',
			var: entityModel
		},
		{
			name: '/img/default-skin.png'
		}
	]

	entityBehavior.minecraft_entity.components['minecraft:trade_table'] = entityBehavior.minecraft_entity.components['minecraft_trade_table']
	delete entityBehavior.minecraft_entity.components['minecraft_trade_table']
	entityBehavior['minecraft:entity'] = entityBehavior['minecraft_entity']
	delete entityBehavior['minecraft_entity']
	entityResource['minecraft:client_entity'] = entityResource['minecraft_client_entity']
	delete entityResource['minecraft_client_entity']

	files.forEach(i => {
		if(i.name === '/img/default-skin.png') {
			let a = document.createElement('a')
			a.href = i.name
			a.download = "default-skin.png"
			// a.click()
		} else {
			let a = document.createElement('a')
			a.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(i.var)
			a.download = i.name
			a.click()
		}
	})
}

const uploadModel = ( ) => {
	var file = document.getElementById('upload-model').files

	if(file.length <= 0) {
		return
	} else {
		entityName = document.getElementById('entity-name').value
		var fileReader = new FileReader()
		fileReader.onload = (e) => {
			entityModel = JSON.parse(e.target.result)
			entityModel['geometry.' + entityName.toLowerCase()] = entityModel['geometry.init']
			delete entityModel['geometry.init']

			console.log(entityModel)
		}
		fileReader.readAsText(file.item(0))
	}
}

// DYNAMIC CONTENT
listItems()
document.getElementById('entity-behavior-output').value = JSON.stringify(entityBehavior, '/t', 2)
document.getElementById('entity-resource-output').value = JSON.stringify(entityResource, '/t', 2)
document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-item').addEventListener('click', addItem)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload-model').addEventListener('click', uploadModel)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('get-json').addEventListener('click', getJSON)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-files').addEventListener('click', savePackage)
})

const base64ToImg = (base64Img, contentType) => {
	const byteCharacters = atob(base64Img)
	const byteArrays = []

	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
		const slice = byteCharacters.slice(offset, offset + 512)

		const byteNumbers = new Array(slice.length)
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i)
		}

		const byteArray = new Uint8Array(byteNumbers)
		byteArrays.push(byteArray)
	}

	return new Blob(byteArrays, { type: contentType })
}

const contentType = 'image/png'

const blob = base64ToImg(base64Img, contentType)

function savePackage() {
	var zip = new JSZip()
	zip.file('behavior_packs/pack_name/entities/entity.json', 'Hello World\n')
	zip.file('behavior_packs/pack_name/trading/economy_trades/entity_table.json', 'Hello World\n')
	zip.file('resource_packs/pack_name/entity/entity.json', 'Hello World\n')
	zip.file('resource_packs/pack_name/models/entity/entity.geo.json', 'Hello World\n')
	var img = zip.folder("resource_packs/pack_name/textures/entity")
	img.file('default-skin.png', blob, {base64: true})
	zip.generateAsync({type:"blob"})
	.then(function(content) {
		saveAs(content, "example.zip")
	})
}
