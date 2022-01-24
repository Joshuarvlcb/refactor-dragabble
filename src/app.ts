import { ProjectInput } from "./components/input-form.js";
import { ProjectList } from "./components/list";

const prjInput = new ProjectInput();
const activeProjects = new ProjectList("active");
const finishedProjects = new ProjectList("finished");

// abstract class Monster {
//   /*
//   ?? how do you get every name of monster
//   ??
//   */

//   constructor(
//     public challenge: number,
//     public weakness: number,
//     public locale: [number, number],
//     public name: string
//   ) {
//     // console.log(this.challenge)
//   }

//   static logAll(name: string): void {
//     console.log(name);
//   }
//   //log the name and stats of the monsters
//   abstract stats(monster: any): void;

//   //  abstract g(name:string) : void{
//   //   console.log(name)
//   // }

//   // createMonster(monster: any): void {

//   // }
//   //!monster init leave it for 5
// }

// // interface Monster {}
// enum Signs {
//   "FingerPrints" = "FingerPrints",
//   "Fire" = "Fire",
//   "Ice" = "Ice",
// }
// class Data {
//   constructor(data: Array<{}>) {
//     console.log(data);
//   }
//   addData(obj: Object) {
//     this.data;
//   }
// }

// class G extends Monster {
//   constructor(public type: string, public signs: Signs[]) {
//     super(10, 2, [202, 20], "Ted");
//   }

//   updateSigns(sign: string) {
//     if (sign === "fingerPrints") {
//       this.signs.push(Signs.FingerPrints);
//       console.log(this.signs);
//     } else if (sign === "fire") {
//       this.signs.push(Signs.Fire);
//     } else if (sign === "ice") {
//       this.signs.push(Signs.Ice);
//     }
//   }

//   stats(monster: any) {
//     const stats = Object.getOwnPropertyNames(monster)
//       .map((key) => {
//         console.log(monster[key]);
//         return monster[key];
//       })
//       .filter((key) => key != this.name);
//     console.log(`My name is ${this.name} my stats are \n${stats}`);
//   }
//   updateType(type: string): void {
//     this.type = type;
//   }
// }

// const m = new G("", []);
// m.stats(m);
// m.updateSigns("hello");

// class B extends Monster {
//   constructor(public habitat: string, public defenses: string[]) {
//     super(10, 2, [202, 20], "Poo");
//   }
//   stats(monster: any) {
//     const stats = Object.getOwnPropertyNames(monster)
//       .map((key) => {
//         console.log(monster[key]);
//         return monster[key];
//       })
//       .filter((key) => key != this.name);
//     console.log(`My name is ${this.name} my stats are \n${stats}`);
//   }

//   addDefense(denfense: string): void {
//     this.defenses.push(denfense);
//   }
//   updateHabitat(habitat: string): void {
//     this.habitat = habitat;
//   }
// }

// enum Compliance {
//   "hostile" = "hostile",
//   "unfriendly" = "unfriendly",
//   "neutral" = "neutral",
//   "friendly" = "friendly",
//   "ally" = "ally",
// }

// class H extends Monster {
//   constructor(public humanness: number, public compliance: Compliance) {
//     super(10, 2, [202, 20], "Fred");
//   }

//   stats(monster: any) {
//     const stats = Object.getOwnPropertyNames(monster)
//       .map((key) => {
//         console.log(monster[key]);
//         return monster[key];
//       })
//       .filter((key) => key != this.name);
//     console.log(`My name is ${this.name} my stats are \n${stats}`);
//   }

//   updateHuman(h: number) {
//     this.humanness = h;
//   }

//   updateCompliance(comp: Compliance) {
//     this.compliance = comp;
//   }
// }

// const ham = new H(10, Compliance.hostile);
// const ham1 = new H(10, Compliance.hostile);
// const ham2 = new H(10, Compliance.hostile);
// const go = new G("type", []);
// const go1 = new G("type", []);
// const go2 = new G("type", []);
// const boo = new B("jungle", []);
// const boo1 = new B("jungle", []);
// const boo2 = new B("jungle", []);
