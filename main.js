// => /behavior_packs/pack_name/entities/entity.json
let entityBehavior = {
    format_version: "1.16.100",
    minecraft_entity: {
        description: {
            identifier: "myname:init",
            is_spawnable: true,
            is_summonable: true
        },
        components: {}
    }
}

// => /resource_packs/pack_name/entity/entity.json
let entityResource = {
	format_version: "1.10.0",
	minecraft_client_entity: {
		description: {
			identifier: "myname:init",
			"materials": {
				"default": "pillager"
			},
			textures: {
				default: "textures/entity/init"
			},
			geometry: {
				default: "geometry.init"
			},
			"spawn_egg": {
				"base_color": "#000",
				"overlay_color": "#fd0"
			},
			"scripts": {
				"pre_animation": ["variable.tcos0 = (Math.cos(query.modified_distance_moved * 38.17) * query.modified_move_speed / variable.gliding_speed_value) * 57.3;"],
				"animate": ["pillager_root_controller"]
			},
			"animations": {
				"humanoid_base_pose": "animation.humanoid.base_pose",
				"look_at_target_default": "animation.humanoid.look_at_target.default",
				"look_at_target_gliding": "animation.humanoid.look_at_target.gliding",
				"look_at_target_swimming": "animation.humanoid.look_at_target.swimming",
				"move": "animation.humanoid.move",
				"riding.arms": "animation.humanoid.riding.arms",
				"riding.legs": "animation.humanoid.riding.legs",
				"holding": "animation.humanoid.holding",
				"attack.rotations": "animation.humanoid.attack.rotations",
				"bob": "animation.humanoid.bob",
				"crossbow_hold": "animation.pillager.crossbow.hold",
				"crossbow_charge": "animation.pillager.crossbow.charge",
				"celebrating": "animation.humanoid.celebrating",
				"controller_humanoid_base_pose": "controller.animation.humanoid.base_pose",
				"controller_look_at_target": "controller.animation.humanoid.look_at_target",
				"controller_move": "controller.animation.humanoid.move",
				"controller_riding": "controller.animation.humanoid.riding",
				"controller_attack": "controller.animation.humanoid.attack",
				"controller_bob": "controller.animation.humanoid.bob",
				"controller_pillager_attack": "controller.animation.pillager.attack",
				"pillager_root_controller": "controller.animation.pillager.root"
			},
			"render_controllers": ["controller.render.default"],
			"enable_attachables": true
		}
	}
}

// => /behavior_packs/pack_name/trading/economy_trades/entity_table.json
let tradeTable = {
    tiers: [
        {
        groups: [
            {
            num_to_select: 4,
            trades: [
                {
                max_uses: 5,
                wants: [
                    {
                    item: "minecraft:emerald",
                    quantity: 2
                    }
                ],
                gives: [
                    {
                    "item": "minecraft:sea_pickle"
                    }
                ]
                }
            ]
            }
        ]
        }
    ]
}

const listItems = ( ) => {
	let tbody = document.getElementById('tbody')
	tbody.innerText = ''

	let trades = tradeTable.tiers[0].groups[0].trades
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

	let qtyMaxPlayer = document.getElementById('qty-max-player').value
	let itemToSell = document.getElementById('item-to-sell').value
	let qtyToSell = document.getElementById('qty-to-sell').value
	let itemForTrade = document.getElementById('item-for-trade').value
	let qtyForTrade = document.getElementById('qty-for-trade').value

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

	tradeTable.tiers[0].groups[0].trades.push(item)

	listItems()

	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
}

const getJSON = (e) => {
    e.preventDefault()

	// checkField()

	let entityName = document.getElementById('entity-name').value
	entityBehavior.minecraft_entity.description.identifier = 'myname:' + entityName.toLowerCase()
	entityResource.minecraft_client_entity.description.identifier = 'myname:' + entityName.toLowerCase()
	entityResource.minecraft_client_entity.description.textures.default = 'textures/entity/' + entityName.toLowerCase()
	entityResource.minecraft_client_entity.description.geometry.default = 'geometry.' + entityName.toLowerCase()

	let checkbox = document.querySelectorAll('input[type="checkbox"]')
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

	let displayedItems = parseInt(document.getElementById('displayed-items').value)
	tradeTable.tiers[0].groups[0].num_to_select = displayedItems

	// Criar condicional com alerta que não será possível gerar a entidade no jogo caso os dois checkboxes estiverem desmarcados.
	// Continua podendo ser spawnado pelo jogo caso as condições pré-estabelecidas sejam cumpridas (por default o NPC não deve spawnar em nenhum momento).

	listItems()
	document.getElementById('entity-behavior-output').value = JSON.stringify(entityBehavior, '/t', 2)
	document.getElementById('entity-resource-output').value = JSON.stringify(entityResource, '/t', 2)
	document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)
}

const exportPkg = ( ) => {
	entityBehavior['minecraft:entity'] = entityBehavior['minecraft_entity']
	delete entityBehavior['minecraft_entity']
	entityResource['minecraft:client_entity'] = entityResource['minecraft_client_entity']
	delete entityResource['minecraft_client_entity']
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
