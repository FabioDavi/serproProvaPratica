// math.test.mjs

import assert from 'assert';
import { soma, subtracao, multiplicacao } from './math.mjs';

// Teste das funções
function testMath() {
  assert.strictEqual(soma(2, 3), 5);
  assert.strictEqual(soma(0, 0), 0);
  assert.strictEqual(soma(-1, 1), 0);
  assert.strictEqual(soma(10, -5), 5);

  assert.strictEqual(subtracao(5, 2), 3);
  assert.strictEqual(subtracao(10, 5), 5);
  assert.strictEqual(subtracao(0, 0), 0);
  assert.strictEqual(subtracao(-1, 1), -2);

  assert.strictEqual(multiplicacao(2, 3), 6);
  assert.strictEqual(multiplicacao(5, 0), 0);
  assert.strictEqual(multiplicacao(2, -4), -8);

  console.log('Teste passou com sucesso!');
}

// Executa os testes
testMath();
