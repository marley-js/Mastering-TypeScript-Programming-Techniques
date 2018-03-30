import { HeroAdapter } from './adapter';

const myhero = new HeroAdapter('Hero', 'Dave, the Nomad');
myhero.fight();

const myhero2 = new HeroAdapter('Warrior', 'Steve, the Angry');
myhero2.fight();