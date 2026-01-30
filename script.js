// Configurações do Supabase
const supabaseUrl = 'https://ikjsomuxdogdwnviihku.supabase.co'; 
const supabaseKey = 'sb_publishable__8c8wtyaYjcGduRbmf5BkA_Z2yDxvdo'; 
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const startDate = new Date(2024, 7, 23, 0, 0);

// Função para buscar e renderizar as memórias alternadas
async function loadMemories() {
    const container = document.getElementById('timeline-content');
    if (!container) return;

    const { data: memorias, error } = await _supabase
        .from('memorias')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error("Erro ao carregar:", error);
        return;
    }

    container.innerHTML = ''; 
    
    memorias.forEach((memoria, index) => {
        // Lógica de alternância automática
        const side = index % 2 === 0 ? 'left' : 'right';
        const card = document.createElement('div');
        card.className = `memory-card ${side}`;
        
        card.innerHTML = `
            <div class="content">
                <h3>✨ ${memoria.titulo || 'Memória'} ✨</h3>
                <p>${memoria['descrição'] || ''}</p> 
                <img src="${memoria.imagem_url}" alt="Foto">
            </div>
        `;
        container.appendChild(card);
    });
}

// Funções de Upload conforme discutido
async function uploadMemory() {
    const file = document.getElementById('new-file').files[0];
    const title = document.getElementById('new-title').value;
    const desc = document.getElementById('new-desc').value;

    if (!file || !title) return alert("Preencha tudo! 😊");

    try {
        const fileName = `${Date.now()}-${file.name}`;
        await _supabase.storage.from('fotos').upload(fileName, file);
        const { data: { publicUrl } } = _supabase.storage.from('fotos').getPublicUrl(fileName);

        await _supabase.from('memorias').insert([{ 
            titulo: title, 
            "descrição": desc, 
            imagem_url: publicUrl 
        }]);

        alert("Memória guardada! ❤️");
        location.reload();
    } catch (err) { alert("Erro ao salvar."); }
}

function abrirModal() { document.getElementById('modal-upload').style.display = 'block'; }
function fecharModal() { document.getElementById('modal-upload').style.display = 'none'; }

// Funções Originais Mantidas
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById('minutes').innerText = Math.floor((diff / 1000 / 60) % 60);
    document.getElementById('seconds').innerText = Math.floor((diff / 1000) % 60);
}

setInterval(updateTimer, 1000);
updateTimer();

function answerYes() {
    const message = document.getElementById('love-message');
    message.innerText = "Eu também te amo muito, meu amor! ❤️🌹";
    document.getElementById('btn-sim').style.transform = "scale(1.2)";
}

function showError() { alert("Não tem essa opção! ❌😜"); }

function moveNo() {
    const btnNao = document.getElementById('btn-nao');
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.position = 'fixed';
    btnNao.style.left = x + 'px';
    btnNao.style.top = y + 'px';
}

function celebrate() { alert("você é o meu porto seguro! 🥰❤️"); }

// Chama o carregamento do banco ao abrir a página
window.onload = loadMemories;