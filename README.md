<p align="center">
<img width="150" src="https://raw.githubusercontent.com/paulogobetti/mc-bedrock-custom-trader-generator/main/img/minecraft-logo.png"></p>
<h1 align="center">Magic Trader</h1>

><div align="center">⚠️
><div align="center">Attention: This project is under development.
<br>
<h4>D E S C R I P T I O N</h4>

**Magic Trader** is a graphical interface written in JavaScript that simplifies and automates the construction of NPC's traders for **Minecraft Bedrock**.
The micro-app generates a init Entity with a 3D model of Wandering Trader and adds or modifies characteristics according to the settings in the app, exporting the generated files in .json.

============================================
<h4>H O W&nbsp&nbsp&nbsp&nbspT O&nbsp&nbsp&nbsp&nbspU S E</h4>
Requirements:<br>
• Any browser or software that runs HTML and JavaScript

Install & Open:
1. Download and extract the pack to your directory
2. Access index.html from your Desktop or Server

Live:
paulogobetti.com/magic-trader

============================================
<h4>H O W&nbsp&nbsp&nbsp&nbspT O&nbsp&nbsp&nbsp&nbspI M P O R T</h4>
• Move the files to the directories indicated below.

|   File             |Dir                          
|---------------------------|-------------------------------
|entity.json|`/com.mojang/behavior_packs/your_pack_name_behavior/entities/`|
|entity.json|`/com.mojang/resource_packs/your_pack_name_resources/entity/`|
|entity_table.json|`/com.mojang/behavior_packs/your_pack_name_bahavior/trading/economy_trades`|
|entity.geo.json|`/com.mojang/resource_packs/your_pack_name_resource/models/entity`|
|entity.png|`/com.mojang/resource_packs/your_pack_name_resource/textures/entity`|

============================================

<h4>D E V</h4>
Escope:<br>
1. The user must fill in all inputs, where he will feed a table of items and JSON previews, keeping it dynamically, without resetting the page.<br>
2. Once completed, the user should be able to save all the necessary files to the Hard Disk (with or without localStorage).

Features:
[X] Populate items table dynamically
[X] Exporting the flat files in **.json, .png** and **.geo.json**
[ ] Exporting **.zip** and **.mcaddon** files

============================================

<h4>SCREENSHOTS</h4>

![alt text](https://nxsagencia.com/files/magic-trader-screenshot.png)

![alt text](https://nxsagencia.com/files/magic-trader-screenshot-npc.png)