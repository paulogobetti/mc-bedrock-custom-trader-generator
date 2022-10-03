let entityBehavior = {
    "format_version": "1.16.100",
    "minecraft:entity": {
        "description": {
            "identifier": "myname:init",
            "is_spawnable": true,
            "is_summonable": true
        },
        "components": {}
    }
}

let entityResource = {
	"format_version": "1.10.0",
	"minecraft:client_entity": {
		"description": {
			"identifier": "myname:init",
			"materials": {
				"default": "pillager"
			},
			"textures": {
				"default": "textures/entity/init"
			},
			"geometry": {
				"default": "geometry.init"
			},
			"spawn_egg": {
				"base_color": "#1d1512",
				"overlay_color": "#8979c0"
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

let tradeTable = {
    "tiers": [
        {
        "groups": [
            {
            "num_to_select": 4,
            "trades": [
                {
                "max_uses": 5,
                "wants": [
                    {
                    "item": "minecraft:emerald",
                    "quantity": 2
                    }
                ],
                "gives": [
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

let entityModel = {}

let entityTexture = {}

const getJSON = (e) => {
    e.preventDefault()
    console.log('getJSON')
}

const addItem = (e) => {
    e.preventDefault()
    console.log('addItem')
}

document.getElementById('entity-behavior-output').value = JSON.stringify(entityBehavior, '/t', 2)
document.getElementById('entity-resource-output').value = JSON.stringify(entityResource, '/t', 2)
document.getElementById('table-output').value = JSON.stringify(tradeTable, '/t', 2)

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('get-json').addEventListener('click', getJSON)
})
