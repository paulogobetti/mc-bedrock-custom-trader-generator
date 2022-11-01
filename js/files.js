// => /behavior_packs/pack_name/entities/entity.json
let entityBehavior = {
    format_version: "1.16.100",
 // minecraft:entity
    minecraft_entity: {
        description: {
            identifier: "myname:init",
            is_spawnable: true,
            is_summonable: true
        },
        components: {
		 // minecraft:trade_table
			minecraft_trade_table:{
				convert_trades_economy: false,
				display_name: "Init",
				new_screen: true,
				persist_trades: false,
				table: "trading/economy_trades/init_table.json"
			}
		}
    }
}

// => /resource_packs/pack_name/entity/entity.json
let entityResource = {
	format_version: "1.10.0",
 // minecraft:client_entity
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
                    item: "minecraft:sea_pickle"
                    }
                ]
                }
            ]
            }
        ]
        }
    ]
}

// => /resource_packs/pack_name/models/entity/entity.geo.json
let entityModel = {
	"format_version": "1.8.0",
	"geometry.init": {
		"visible_bounds_width": 1.5,
		"visible_bounds_height": 2.5,
		"visible_bounds_offset": [0, 1.25, 0],
		"texturewidth": 64,
		"textureheight": 64,
		"bones": [
			{
				"name": "head",
				"pivot": [0, 24, 0],
				"locators": {
					"lead": [0, 0, 0]
				},
				"cubes": [
					{
						"origin": [-4, 24, -4],
						"size": [8, 10, 8],
						"uv": [0, 0]
					}
				],
				"parent": "body"
			},
			{
				"name": "nose",
				"pivot": [0, 26, 0],
				"cubes": [
					{
						"origin": [-1, 23, -6],
						"size": [2, 4, 2],
						"uv": [24, 0]
					}
				],
				"parent": "head"
			},
			{
				"name": "body",
				"parent": "waist",
				"pivot": [0, 0, 0],
				"cubes": [
					{
						"origin": [-4, 12, -3],
						"size": [8, 12, 6],
						"uv": [16, 20]
					},
					{
						"origin": [-4, 6, -3],
						"size": [8, 18, 6],
						"uv": [0, 38],
						"inflate": 0.5
					}
				]
			},
			{
				"name": "waist",
				"neverRender": true,
				"pivot": [0, 12, 0]
			},
			{
				"name": "leftLeg",
				"parent": "body",
				"pivot": [2, 12, 0],
				"cubes": [
					{
						"origin": [0, 0, -2],
						"size": [4, 12, 4],
						"uv": [0, 22]
					}
				]
			},
			{
				"name": "rightLeg",
				"parent": "body",
				"pivot": [-2, 12, 0],
				"mirror": true,
				"cubes": [
					{
						"origin": [-4, 0, -2],
						"size": [4, 12, 4],
						"uv": [0, 22]
					}
				]
			},
			{
				"name": "rightarm",
				"parent": "body",
				"pivot": [-5, 22, 0],
				"cubes": [
					{
						"origin": [-8, 12, -2],
						"size": [4, 12, 4],
						"uv": [40, 46]
					}
				]
			},
			{
				"name": "rightItem",
				"pivot": [-6, 15, 1],
				"neverRender": true,
				"parent": "rightArm"
			},
			{
				"name": "leftarm",
				"parent": "body",
				"pivot": [5, 22, 0],
				"mirror": true,
				"cubes": [
					{
						"origin": [4, 12, -2],
						"size": [4, 12, 4],
						"uv": [40, 46]
					}
				]
			},
			{
				"name": "leftItem",
				"pivot": [6, 15, 1],
				"neverRender": true,
				"parent": "leftArm"
			}
		]
	}
}
