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

	let qtyMaxPlayer = parseInt(document.getElementById('qty-max-player').value)
	let itemToSell = document.getElementById('item-to-sell').value
	let qtyToSell = parseInt(document.getElementById('qty-to-sell').value)
	let itemForTrade = document.getElementById('item-for-trade').value
	let qtyForTrade = parseInt(document.getElementById('qty-for-trade').value)

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
	
		entityModel['geometry.' + entityName.toLowerCase()] = entityModel['geometry.init']
		delete entityModel['geometry.init']
	
		
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

const exportPkg = (e) => {
	e.preventDefault()

	entityBehavior.minecraft_entity.components['minecraft:trade_table'] = entityBehavior.minecraft_entity.components['minecraft_trade_table']
	delete entityBehavior.minecraft_entity.components['minecraft_trade_table']
	entityBehavior['minecraft:entity'] = entityBehavior['minecraft_entity']
	delete entityBehavior['minecraft_entity']
	entityResource['minecraft:client_entity'] = entityResource['minecraft_client_entity']
	delete entityResource['minecraft_client_entity']

	listItems()
	document.getElementById('entity-behavior-output').value = JSON.stringify(entityBehavior, '/t', 2)
	document.getElementById('entity-resource-output').value = JSON.stringify(entityResource, '/t', 2)
	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
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
    document.getElementById('get-json').addEventListener('click', getJSON)
})

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('export-pack').addEventListener('click', exportPkg)
})
