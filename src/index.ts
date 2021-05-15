require("dotenv").config()

import Obniz from "obniz"
import OTTO from "./otto/"
import { log, sleep, round } from "./otto/utils"

; (async () => {
	
	const obnizId = process.env.OBNIZ_ID || ""
	if (!obnizId) throw new Error("Error: obniz id is invalid!")
	
	const obniz: Obniz = new Obniz(obnizId)
	if (!(await obniz.connectWait({timeout: 3}))) throw new Error("Error: Failed to connect obniz!")
	
	// MEMO: `obniz.wired("OTTO", {rightLeg: 0, leftLeg: 1 ...})`の代わり
	const otto: OTTO = await new OTTO(obniz, {
		rightLeg: 0,
		leftLeg: 1,
		rightFoot: 2,
		leftFoot: 3,
		eyeTrigger: 4,
		eyeEcho: 5,
		voice: 6,
		vcc: 10,	// MEMO: このピンへは接続しないが省略するとエラーが出るためダミー指定
		gnd: 11		// MEMO: このピンへは接続しないが省略するとエラーが出るためダミー指定
	})
	
	await otto.calibration()
	await sleep(1000)
	
	
	
	await Promise.race([
		// 歌いながらダンス
		otto.dance(100),
		otto.sing(otto.song.frog),
		
		// 歩く
		// otto.walkForward(4),
		
		// 走る
		// otto.dashForward(8),
	])
	
	otto.stop()
	
	process.exit(0)
	
})()

log("OTTO start!")
