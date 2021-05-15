require("dotenv").config()
import { log, sleep, round } from "./utils"

enum Pitch {
	NONE = 0,
	A0 = 28, AS0 = 29, BF0 = 29, B0 = 31,
	C1 = 33, CS1 = 35, DF1 = 35, D1 = 37, DS1 = 39, EF1 = 39, E1 = 41, F1 = 44, FS1 = 46, GF1 = 46, G1 = 49, GS1 = 52, AF1 = 52, A1 = 55, AS1 = 58, BF1 = 58, B1 = 62,
	C2 = 65, CS2 = 69, DF2 = 69, D2 = 73, DS2 = 78, EF2 = 78, E2 = 82, F2 = 87, FS2 = 92, GF2 = 92, G2 = 98, GS2 = 104, AF2 = 104, A2 = 110, AS2 = 117, BF2 = 117, B2 = 123,
	C3 = 131, CS3 = 139, DF3 = 139, D3 = 147, DS3 = 156, EF3 = 156, E3 = 165, F3 = 175, FS3 = 185, GF3 = 185, G3 = 196, GS3 = 208, AF3 = 208, A3 = 220, AS3 = 233, BF3 = 233, B3 = 247,
	C4 = 262, CS4 = 277, DF4 = 277, D4 = 294, DS4 = 311, EF4 = 311, E4 = 330, F4 = 349, FS4 = 370, GF4 = 370, G4 = 392, GS4 = 415, AF4 = 415, A4 = 440, AS4 = 466, BF4 = 466, B4 = 494,
	C5 = 523, CS5 = 554, DF5 = 554, D5 = 587, DS5 = 622, EF5 = 622, E5 = 659, F5 = 698, FS5 = 740, GF5 = 740, G5 = 784, GS5 = 831, AF5 = 831, A5 = 880, AS5 = 932, BF5 = 932, B5 = 988,
	C6 = 1047, CS6 = 1109, DF6 = 1109, D6 = 1175, DS6 = 1245, EF6 = 1245, E6 = 1319, F6 = 1397, FS6 = 1480, GF6 = 1480, G6 = 1568, GS6 = 1661, AF6 = 1661, A6 = 1760, AS6 = 1865, BF6 = 1865, B6 = 1976,
	C7 = 2093, CS7 = 2217, DF7 = 2217, D7 = 2349, DS7 = 2489, EF7 = 2489, E7 = 2637, F7 = 2794, FS7 = 2960, GF7 = 2960, G7 = 3136, GS7 = 3322, AF7 = 3322, A7 = 3520, AS7 = 3729, BF7 = 3729, B7 = 3951,
	C8 = 4186,
}

enum Length {
	Whole = 4,
	Half = 2,
	Quoter = 1,
	Eighth = 0.5,
	Sixteenth = 0.25,
	DotHalf = 3,
	DotQuoter = 1.5,
	DotEighth = 0.75,
	DotSixteenth = 0.375,
}

namespace Song {
	export type Note = [Pitch, Length]
	
	export type Score = {
		bpm: number
		melody: Note[]
	}
}

class Song {
	doremi: Song.Score = {
		bpm: 120,
		melody: [
			[Pitch.C4	, Length.Quoter],
			[Pitch.D4	, Length.Quoter],
			[Pitch.E4	, Length.Quoter],
			[Pitch.F4	, Length.Quoter],
			[Pitch.G4	, Length.Quoter],
			[Pitch.A4	, Length.Quoter],
			[Pitch.B4	, Length.Quoter],
			[Pitch.C5	, Length.Quoter],
		]
	}
	
	frog: Song.Score = {
		bpm: 80,
		melody: [
			[Pitch.C4	, Length.Eighth],
			[Pitch.D4	, Length.Eighth],
			[Pitch.E4	, Length.Eighth],
			[Pitch.F4	, Length.Eighth],
			[Pitch.E4	, Length.Eighth],
			[Pitch.D4	, Length.Eighth],
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			
			[Pitch.E4	, Length.Eighth],
			[Pitch.F4	, Length.Eighth],
			[Pitch.G4	, Length.Eighth],
			[Pitch.A4	, Length.Eighth],
			[Pitch.G4	, Length.Eighth],
			[Pitch.F4	, Length.Eighth],
			[Pitch.E4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
			
			[Pitch.C4	, Length.Sixteenth],
			[Pitch.C4	, Length.Sixteenth],
			[Pitch.D4	, Length.Sixteenth],
			[Pitch.D4	, Length.Sixteenth],
			[Pitch.E4	, Length.Sixteenth],
			[Pitch.E4	, Length.Sixteenth],
			[Pitch.F4	, Length.Sixteenth],
			[Pitch.F4	, Length.Sixteenth],
			[Pitch.E4	, Length.Sixteenth],
			[Pitch.NONE	, Length.Sixteenth],
			[Pitch.D4	, Length.Sixteenth],
			[Pitch.NONE	, Length.Sixteenth],
			[Pitch.C4	, Length.Eighth],
			[Pitch.NONE	, Length.Eighth],
		]
	}
}

export default Song
