// Cargar torneos desde localStorage al cargar la página
window.onload = function () {
    const savedTournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    savedTournaments.forEach(addTournamentToUI);
  };
  
  // Añadir torneo nuevo y guardarlo en localStorage
  document.getElementById('tournament-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('tournament-name').value;
    const gameType = document.getElementById('game-type').value;
    const date = document.getElementById('date').value;
    const maxPlayers = parseInt(document.getElementById('max-players').value, 10);
  
    const tournament = {
      name,
      gameType,
      date,
      maxPlayers,
      currentPlayers: 0,
    };
  
    // Guardar en localStorage
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    tournaments.push(tournament);
    localStorage.setItem('tournaments', JSON.stringify(tournaments));
  
    // Añadir a la interfaz
    addTournamentToUI(tournament);
  
    // Limpiar formulario
    document.getElementById('tournament-form').reset();
  });
  
  // Función para agregar un torneo a la interfaz
  function addTournamentToUI(tournament) {
    const tournamentsList = document.getElementById('tournaments');
    const tournamentItem = document.createElement('li');
    tournamentItem.innerHTML = `
      <span>${tournament.name} - ${tournament.gameType} (${tournament.date}) - 
      Máx. ${tournament.maxPlayers} jugadores</span>
      <button ${tournament.currentPlayers >= tournament.maxPlayers ? 'disabled' : ''}>
        ${tournament.currentPlayers >= tournament.maxPlayers ? 'Lleno' : 'Inscribirse'}
      </button>
    `;
  
    tournamentsList.appendChild(tournamentItem);
  
    // Evento para manejar el botón "Inscribirse"
    tournamentItem.querySelector('button').addEventListener('click', function () {
      openModal(tournament.name);
    });
  }
  
  // Modal y variables globales
  const modal = document.getElementById('modal');
  const inscriptionForm = document.getElementById('inscription-form');
  let selectedTournament = null;
  
  // Abrir el modal al hacer clic en "Inscribirse"
  function openModal(tournamentName) {
    selectedTournament = tournamentName; // Guardar el torneo seleccionado
    modal.classList.remove('hidden');
  }
  
  // Cerrar el modal
  document.getElementById('cancel').addEventListener('click', function () {
    modal.classList.add('hidden');
  });
  
  // Confirmar inscripción
  inscriptionForm.addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Obtener los datos del formulario
    const userName = document.getElementById('user-name').value;
    const userAge = document.getElementById('user-age').value;
    const userEmail = document.getElementById('user-email').value;
    const userPhone = document.getElementById('user-phone').value;
  
    if (!userName || !userAge || !userEmail || !userPhone) {
      alert('Todos los campos son obligatorios.');
      return;
    }
  
    // Actualizar los datos del torneo en localStorage
    const tournaments = JSON.parse(localStorage.getItem('tournaments')) || [];
    const tournamentIndex = tournaments.findIndex(t => t.name === selectedTournament);
  
    if (tournamentIndex > -1) {
      const tournament = tournaments[tournamentIndex];
      tournament.currentPlayers++;
  
      // Verificar si se alcanzó el límite de jugadores
      if (tournament.currentPlayers >= tournament.maxPlayers) {
        const tournamentItem = Array.from(document.querySelectorAll('#tournaments li')).find(li =>
          li.querySelector('span').textContent.includes(selectedTournament)
        );
        if (tournamentItem) {
          const button = tournamentItem.querySelector('button');
          button.disabled = true;
          button.textContent = 'Lleno';
        }
      }
  
      // Guardar cambios en localStorage
      localStorage.setItem('tournaments', JSON.stringify(tournaments));
    }
  
    alert(`Inscripción exitosa: ${userName}`);
    modal.classList.add('hidden');
    inscriptionForm.reset();
  });
  