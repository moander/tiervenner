'use strict'

const app = angular.module('tiervenner', []);

app.controller('tiervenner', function () {
  this.answers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let stats = this.stats = {
    ok: 0,
    err: 0,
  };

  let startGame = () => {
    let next;
    do {
      next = Math.floor(Math.random() * 9) + 1
    } while (next === this.question);
    this.question = next;
  };

  startGame();

  this.answer = (question, answer) => {
    let desc = question + ' + ' + answer + ' = ' + (question + answer);
    if (question + answer === 10) {
      stats.ok++;
      startGame();
      swal('Riktig :D', desc, 'success');
    }
    else {
      stats.err++;
      swal('Feil :-(', desc, 'error');
    }
  };
});

