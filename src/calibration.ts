require("dotenv").config()

import Obniz from "obniz"

const obnizId = process.env.OBNIZ_ID || ""

const obniz = new Obniz(obnizId)
obniz.onconnect = async () => {
	calibration()
	setTimeout(() => process.exit(0), 3000)
}

const calibration = async () => {
	const rightLeg =	obniz.wired("ServoMotor", {signal:0, vcc:10, gnd:11})
	const leftLeg  =	obniz.wired("ServoMotor", {signal:1, vcc:10, gnd:11})
	const rightFoot =	obniz.wired("ServoMotor", {signal:2, vcc:10, gnd:11})
	const leftFoot =	obniz.wired("ServoMotor", {signal:3, vcc:10, gnd:11})
	
	const angle = 90
	rightLeg.angle(angle)
	leftLeg.angle(angle)
	rightFoot.angle(angle)
	leftFoot.angle(angle)
}
