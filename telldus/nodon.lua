-- File: nodon.lua

local remoteControl = "remote_hall"
local device1 = "telldus_home"
local device2 = "telldus_lights"
local device3 = "telldus_away"
local device4 = "telldus_sleep"

COMMAND_CLASS_CENTRAL_SCENE = 0x5B
CENTRAL_SCENE_NOTIFICATION = 0x03

local deviceManager = require "telldus.DeviceManager"

function handleScene(action, deviceId)
	local device = deviceManager:findByName(deviceId)
	if action == 0 then -- Press
		device:command("turnon", nil, "Scene")
		print("Turning ON device: %s", deviceId)
	elseif action == 1 then -- Release
	elseif action == 2 then -- Press and hold
	elseif action == 3 then -- Double-click
		device:command("turnoff", nil, "Scene")
		print("Turning OFF device: %s", deviceId)
	end
end

function onZwaveMessageReceived(device, flags, cmdClass, cmd, data)
	if device:name() ~= remoteControl then
		return
	end
	if cmdClass ~= COMMAND_CLASS_CENTRAL_SCENE or cmd ~= CENTRAL_SCENE_NOTIFICATION then
		return
	end
	if list.len(data) < 3 then
		return
	end

	local sequence = data[0]
	local action = data[1]
	local scene = data[2]
	print("CENTRAL_SCENE_NOTIFICATION from Device: %s, Scene: %s, Action: %s", device:name(), scene, action)

	if scene == 1 then
		handleScene(action, device1) -- Circle filled
	elseif scene == 2 then
		handleScene(action, device2) -- Plus
	elseif scene == 3 then
		handleScene(action, device3) -- Circle blank
	elseif scene == 4 then
		handleScene(action, device4) -- Minus
	end
end