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

// Skin PNG File in Base64
const base64Img = 'iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG5klEQVR4nO2bX2xTVRjAf13brbS3XQcrDCZzQwGdbjHG7MGYEKIvxER9gPCgvphowgskxARiiC/yAGp4ABIgMRojD2KiggnBF19mMhNCiFkjDHVsGRsUVrZu7b29XTfqQ3vv7r+2t6Pd7rC/ZDnnnn8933e+851zz7lzNTQ0UIpT587lADKyrKY1+Xzg9UI2W7JuRpbZuGmT6909e3hr9+4cQFtbGwA7duxwvbtnD48ePSrZRq3x2ClkKbyGaDRqWW/b1q2P0bXlwWXHAjKynBe8CNFolN+uXNGlvb5rF9u2bqX/99+BxZGPxWK657MnT7qW3PsqUFr6/wHlp4DXS5MmDpSd+6uJyi3gCRIe7FiAVmCj8JqV4PVduyyr7927t+QcP3vyZNku1BJbqwDkVwKTIywI39PTo1spVhMeZZ1XKczzTDJZ3PMb9gClVompqamcKVFff+VXAd3oZbOlhS+U0dLk85GRZV07pSwik0wusbvVp6gTNApgVIhVfkmlaeooCnMCnmLmq00r1lmtQFb1jW0bBXeCElQnqO2sttPnv/4agDffeQe/3w+AJElcvngRgPc++MDUqLYtJwhZigZJkko6sXg8DsDlixfxNjbibWxUhVfyjBhHWpIk3Z+TUH1AMdPct38/AwMDZHrcZOfmyM7NkelxMzAwwL79+y3rKHFFYMVyFBQlOEEZrqPHj6vLlLajikXcvn2bSCSCz+fD7Xar+aIoMjk5yZYtWwBMI26XI4cOregy6JlOJGgJhwF0o2Wcu/39/brnvr4+y3Ja4acTCQBawmFdXJu30nhA31FFAEURoigSiUQsK4uiqMatBLd6dorgderkqZkD6mvrML8DaHgol3aUw4n4sjhH22+DS+XV9/fS/tRTAEyMjzPw3YVa/2RFmLTc0d2tG7nO1ASpzBxCUyOpzBzX76dtjUxfW0dOK7yCogSnWEDZEyGt8EJT43L0aVkpqwCt8KnMXMU/MDE+bhl3CjW1AGW+T4yPq8I7zQd4jHPeSHxdF3EAAeJAR3e7rvxOIV20bkI0vwluXJclHPABwZIde1H06n4nXwe+vTpSVd9Qs3uBhChz76GXTe3t6h/AfLbVUjHGunbSqsFjKyCeELg5tmAKA56niYSa+fOb7wG4OzHBP5d+pXlNgPlsa9F68YTAvYde5rOtpvDm2MJjC2zEch/gEgQAcqlU2QYmZ2fUJU0bRtIik7MzAPz8Q37eLxSelXSrenbCamKyAJcg0NTSosafdEwWkEulkG2MvEIk1GwZNq8JqOFI4Q2wK9SspperXywctt0ze3ggv9trCfrZ3taiZtxPpkmIMuGAj4QoM52UGBXaTQ3YmQLCrEgk1Kw+O2kKeHYKaRDWAnmhYdHjTiclwgGf+tfF4pK3IbiG+8k0N6esGy6mGCVc5/NbV1xmXG+/sDGnHWXjbm9za1hdg62Wounk8p7r9Y/NVHUf4Hp5wxrdhkNoaqQlmB8dK4UYkdd1Fs178OAB69evL5tWCTdu3KyqAjza7W1L0E844FPNW0lTRllRjGIxd+IJUjauuZQyQjCoe3YC6jKoCAeLDtCYpyhCmS523w2EYFAVvk6dOnXq1KlTxyms6NX0Uvjj+vXctdERrh37mIQo89pHh/l3eJhnn3mGf4eHOVfht8er7lthrfAA/kBAF1bKqlOAlumkxODgIL29vWpYKatSAa8c/lL3Gi4VvlOQNN8r2MXxPuDUTz+qr+uvdHZxbXSE6K0hMj9/ZXk+8cZnp4neGuL++dMAXPrrXkkZa347/LhEbw0B0LP9OVV40J9aWZW3i+MtQLm5Mp5QvyTeKXpOCYvnnGUtoLv7+Vxz4cMlIxN37nDh0i9A3vsCfHHgAO2bN1uWn7Hx/U+lJzo9824mZ2eIKGHhcPXPjs3kcqnF/EK6Eo6ubWc0B3CvZPueVDJpOrFRkNJpro2OcObIEQD2HT2KlE6bBK3lCU+xw9UNYzEeyhKTPr9lftuUvVNknQ9IJZMmJURvDfHa+++pcSNOOt5aCp5Ol0GA1OJzqx+Gznyuy+72A6m7i2Uq9CJjFXaw0ouTSi9SGoK+DuS5ZpYrrJQRzzzuLe1MtQq6cMQzT2ptgGh6mpj3kWWYWlt+d+gpd4EBcDU25iKW/+7HTvlq3+zMJBJYOepy08/O9DTtA7QmdDU25tKa0NXYmAvyilDK1ZrM3UkAHhRCLV5TSuV4jHPm8t/R/KyOFa+kWATAm9t6ctr61b7c/PDTT9T4yOgovb29JGdnAQiGQgwODtLV2anmA3R1dqrx4TL/leb4jdCxEydywVAIgOTsLG63G38goO77FxbMH00EQyFVSYcPHnS8jHVWkv8AkjwaAng98yIAAAAASUVORK5CYII='
