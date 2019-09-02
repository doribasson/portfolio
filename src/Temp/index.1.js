import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//ReactDOM.render(<div>React element</div>, document.getElementById('root'));
//ReactDOM.render(<App></App>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

// Speak() {
//     console.log('I am', this.name, 'and I am', this.age, 'years old');
//     }
// }

// const animal1 = new Animal('Simba',3);
// animal1.Speak();

// console.log(animal1);

// class Lion extends Animal{
//     constructor(name,age, furcolor, speed){
//         super(name, age); 
//         this.furcolor = furcolor;
//         this.speed = speed;
//     }

//     roar() {
//         console.log('Rooorar! I have', 
//         this.furcolor,'fur,and i can run',
//         this.speed, 'miles an hour!');
//     }
// }

// const lion1 = new Lion('Mufasa', 20, 'golden',25);
// lion1.Speak();
// lion1.roar();
// console.log(lion1);   