function runScript(script) {
    const vm = require('vm');
    const context = { JSON, result: null };
    vm.createContext(context);
    vm.runInContext(script, context);
    return context.result;
}

function test() {
    const script = `
      const array = [1, 2, 3, 4, 5, 6];
      const [primeiro, segundo, ...resd] = array;
      result = { primeiro, segundo, resd };
    `;

    const result = runScript(script);

    // Teste das assertivas
    if (result.primeiro === 1 && result.segundo === 2 && result.resd.join('') === '3456') {
        console.log('Teste passou com sucesso!');
    } else {
        console.error('Teste falhou.');
    }
}

// Executa o teste
test();
