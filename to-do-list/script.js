window.onload = () => {
  // Captura de elementos
  const submitTarefa = document.querySelector('#criar-tarefa');
  const criaTarefa = document.querySelector('#texto-tarefa');
  const listaTarefa = document.querySelector('#lista-tarefas');
  const limpaTudo = document.querySelector('#apaga-tudo');
  const ol = document.querySelector('#lista-tarefas');
  const concluded = document.querySelector('#remover-finalizados');
  const saveTasks = document.querySelector('#salvar-tarefas');
  const moveUp = document.querySelector('#mover-cima');
  const moveDown = document.querySelector('#mover-baixo');
  const removeTask = document.querySelector('#remover-selecionado');

  // Envia a tarefa pra ol
  submitTarefa.addEventListener('click', (e) => {
    const li = document.createElement('li');
    li.innerText = criaTarefa.value;
    listaTarefa.appendChild(li);
    li.classList.add('lista');
    criaTarefa.value = '';
  });

  // Seleciona tarefa
  ol.addEventListener('click', (e) => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    } else if (e.target.classList.contains('lista')) {
      if (e.target.classList.contains('selected')) {
        selected.classList.remove('selected');
      } else if (selected) {
        selected.classList.remove('selected');
      }
      e.target.classList.add('selected');
    }
  });

  // Selecionar tarefa como completa
  ol.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
  // Botão para limpar todas as tarefas
  limpaTudo.addEventListener('click', () => {
    let listaDeTarefa = document.querySelector('#lista-tarefas');
    listaDeTarefa.innerHTML = '';
  });

  // Botão para remover tarefas concluídas
  concluded.addEventListener('click', () => {
    const taksConcluded = document.querySelectorAll('.completed');
    for (let index = 0; index < taksConcluded.length; index += 1) {
      const element = taksConcluded[index];
      ol.removeChild(element);
    }
  });

  // Adiciona ao local Storage ao clicar
  saveTasks.addEventListener('click', () => {
    const olNow = document.querySelector('#lista-tarefas');
    localStorage.setItem('rescueOl', JSON.stringify(olNow.innerHTML));
  });

  // Pega do Local Storage se houver.
  if (localStorage.getItem('rescueOl')) {
    ol.innerHTML = JSON.parse(localStorage.getItem('rescueOl'));
  }

  // Move para cima a tarefa
  moveUp.addEventListener('click', () => {
    const selectedLine = document.querySelector('.selected');
    if (selectedLine) {
      if (selectedLine.previousSibling) {
        selectedLine.parentNode.insertBefore(
          selectedLine,
          selectedLine.previousSibling
        );
      }
    }
  });

  // Move para baixo a tarefa
  moveDown.addEventListener('click', () => {
    const selectedLine = document.querySelector('.selected');
    if (selectedLine) {
      if (selectedLine.nextSibling) {
        selectedLine.parentNode.insertBefore(
          selectedLine.nextElementSibling,
          selectedLine
        );
      }
    }
  });

  // Remove tarefa selecionada
  removeTask.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) {
      ol.removeChild(selected);
    }
  });
};
