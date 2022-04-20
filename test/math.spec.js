const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
  // hooks
  // permitir reiniciar uma variável antes de cada teste. Outros: before, after, afterEach
  beforeEach(function() {
    value = 0;
  })

  // para validação de código assincrono, adicionamos o done no it para aguardar o processamento.
  // mocha não recomenda utilizar arrow functions e sim fuction para ter o controle de escopo.
  it('Sum two numbers', function(done) {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(3000);

    value = 5;

    math.sum(value, 5, value => {
      // assert
      // assert.equal(value, 10);

      // chai
      expect(value).to.equal(10);
    });
    done();
  });

  // mocha permite deixar anotado os testes futuros
  // it('Multiply two numbers');
  
  // mocha executa apenas esse teste
  // it.only('Multiply two numbers', function() {});

  // mocha desconsidera esse teste
  // it.skip('Multiply two numbers', function() {});

  it('Multiply two numbers', function() {
    const math = new Math();

    // é possível alterar o timeout do mocha, o padrão é 2000ms.
    this.timeout(5000);
    // assert
    // assert.equal(math.multiply(value, 5), 0);

    // chai
    expect(math.multiply(value, 5)).to.equal(0);
  });

  // chai comparando propriedades de objetos
  it('Compare property name of objects', function() {
    const obj = {
      name: 'Wellysson'
    };

    // chai
    expect(obj)
      .to.have.property('name')
      .equal('Wellysson');
  });

  // chai comparando objetos
  it('Compare objects', function() {
    const obj = {
      name: 'Wellysson'
    };

    const obj2 = {
      name: 'Wellysson'
    };

    // chai
    expect(obj).to.deep.equal(obj2);
  });

  // sinon para mockar função
  it('Calls req with sum and index values', function() {
    const req = {};
    const res = {
      // função espiã que diz se a função da classe foi ou não executada 
      load: sinon.spy()
      //load: function load() {
      //   console.log("Called");
      // };
    };

    //executa a função, substitui os valores e colaca um retorno customizado
    //sinon.stub(res, 'load').returns('xpto');
    //volta o método ao normal
    //sinon.restore();

    const math = new Math();

    math.printSum(req, res, 5, 5);

    // chai e sinon
    // verifica se função foi chamada
    expect(res.load.calledOnce).to.be.true;

    // chai e sinon
    // verifica se o primeiro argumento é 'index'
    // expect(res.load.args[0][0]).to.equal('index');
    // verifica se o segundo argumento é o resultado da soma dos dois valores enviados
    // expect(res.load.args[0][1]).to.equal(10);
  });
});