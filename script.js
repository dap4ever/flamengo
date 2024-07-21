document.addEventListener("DOMContentLoaded", function () {
    const prev = document.querySelector(".lista-jogos__navegacao--seta-esquerda");
    const next = document.querySelector(".lista-jogos__navegacao--seta-direita");
    const rodadaAtual = document.querySelector(".lista-jogos__navegacao--rodada");
    let index = 0; // Supondo que vc vai começar na última rodada, que é a mais recente

    const rodadas = [
        {
            rodada: "6ª RODADA",
            jogos: `
                <li class="lista-jogos__jogo">
                    <div class="jogo theme" itemscope="" itemtype="http://schema.org/SportsEvent">
                        <meta itemprop="name" content="Fluminense x Alianza Lima" />
                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                        <meta itemprop="location" content="América do Sul" />
                        <a class="jogo__transmissao--link" href="https://ge.globo.com/rj/futebol/libertadores/jogo/29-05-2024/fluminense-alianza-lima.ghtml">
                            <div>
                                <div class="jogo__informacoes">
                                    <span class="jogo__informacoes--local">Maracanã</span>
                                    <span class="jogo__informacoes--data">29/05</span>
                                    <span class="jogo__informacoes--data">Quarta</span>
                                    <span class="jogo__informacoes--hora">21:30</span>
                                </div>
                                <div class="placar">
                                    <div class="placar__equipes placar__equipes--mandante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Fluminense" />
                                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <span class="equipes__sigla" title="Fluminense">FLU</span>
                                        <span class="equipes__nome">Fluminense</span>
                                        <img class="equipes__escudo equipes__escudo--mandante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg" width="30" height="30" title="Fluminense" />
                                    </div>
                                    <div class="placar-box">
                                        <span class="placar-box__valor placar-box__valor--mandante">3</span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-mandante"></span>
                                        <span class="placar-box__versus">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="scoreboard-vs-icon" width="100%" height="100%">
                                                <line x1="-3" x2="100" y1="1" y2="100" stroke="#555" stroke-width="5"></line>
                                                <line x1="-3" x2="100" y1="100" y2="1" stroke="#555" stroke-width="5"></line>
                                            </svg>
                                        </span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-visitante"></span>
                                        <span class="placar-box__valor placar-box__valor--visitante">2</span>
                                    </div>
                                    <div class="placar__equipes placar__equipes--visitante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Alianza Lima" />
                                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <img class="equipes__escudo equipes__escudo--visitante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2019/02/19/alianza-lima-svg-13081.svg" width="30" height="30" title="Alianza Lima" />
                                        <span class="equipes__sigla" title="Alianza Lima">ALI</span>
                                        <span class="equipes__nome">Alianza Lima</span>
                                    </div>
                                </div>
                            </div>
                            <span class="jogo__transmissao--broadcast" style="color: rgb(6, 170, 72); background-color: transparent;">saiba como foi</span>
                        </a>
                    </div>
                </li>
                <li class="lista-jogos__jogo">
                    <div class="jogo theme" itemscope="" itemtype="http://schema.org/SportsEvent">
                        <meta itemprop="name" content="Cerro Porteño x Colo-Colo" />
                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                        <meta itemprop="location" content="América do Sul" />
                        <a class="jogo__transmissao--link" href="https://ge.globo.com/futebol/libertadores/jogo/29-05-2024/cerro-porteno-colo-colo.ghtml">
                            <div>
                                <div class="jogo__informacoes">
                                    <span class="jogo__informacoes--local">La Nueva Olla</span>
                                    <span class="jogo__informacoes--data">29/05</span>
                                    <span class="jogo__informacoes--data">Quarta</span>
                                    <span class="jogo__informacoes--hora">21:30</span>
                                </div>
                                <div class="placar">
                                    <div class="placar__equipes placar__equipes--mandante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Cerro Porteño" />
                                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <span class="equipes__sigla" title="Cerro Porteño">CCP</span>
                                        <span class="equipes__nome">Cerro Porteño</span>
                                        <img class="equipes__escudo equipes__escudo--mandante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2024/03/26/CERRO_PORTEÑO.svg" width="30" height="30" title="Cerro Porteño" />
                                    </div>
                                    <div class="placar-box">
                                        <span class="placar-box__valor placar-box__valor--mandante">1</span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-mandante"></span>
                                        <span class="placar-box__versus">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="scoreboard-vs-icon" width="100%" height="100%">
                                                <line x1="-3" x2="100" y1="1" y2="100" stroke="#555" stroke-width="5"></line>
                                                <line x1="-3" x2="100" y1="100" y2="1" stroke="#555" stroke-width="5"></line>
                                            </svg>
                                        </span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-visitante"></span>
                                        <span class="placar-box__valor placar-box__valor--visitante">1</span>
                                    </div>
                                    <div class="placar__equipes placar__equipes--visitante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Colo-Colo" />
                                        <meta itemprop="startDate" content="2024-05-29T21:30" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <img class="equipes__escudo equipes__escudo--visitante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2023/05/01/Colo-Colo.svg" width="30" height="30" title="Colo-Colo" />
                                        <span class="equipes__sigla" title="Colo-Colo">COL</span>
                                        <span class="equipes__nome">Colo-Colo</span>
                                    </div>
                                </div>
                            </div>
                            <span class="jogo__transmissao--broadcast" style="color: rgb(6, 170, 72); background-color: transparent;">saiba como foi</span>
                        </a>
                    </div>
                </li>
            `
        },
        {
            rodada: "5ª RODADA",
            jogos: `
                <li class="lista-jogos__jogo">
                    <div class="jogo theme" itemscope="" itemtype="http://schema.org/SportsEvent">
                        <meta itemprop="name" content="Alianza Lima x Colo-Colo" />
                        <meta itemprop="startDate" content="2024-05-15T21:00" />
                        <meta itemprop="location" content="América do Sul" />
                        <a class="jogo__transmissao--link" href="https://ge.globo.com/futebol/libertadores/jogo/15-05-2024/alianza-lima-colo-colo.ghtml">
                            <div>
                                <div class="jogo__informacoes">
                                    <span class="jogo__informacoes--local">Alejandro Villanueva</span>
                                    <span class="jogo__informacoes--data">15/05</span>
                                    <span class="jogo__informacoes--data">Quarta</span>
                                    <span class="jogo__informacoes--hora">21:00</span>
                                </div>
                                <div class="placar">
                                    <div class="placar__equipes placar__equipes--mandante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Alianza Lima" />
                                        <meta itemprop="startDate" content="2024-05-15T21:00" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <span class="equipes__sigla" title="Alianza Lima">ALI</span>
                                        <span class="equipes__nome">Alianza Lima</span>
                                        <img class="equipes__escudo equipes__escudo--mandante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2019/02/19/alianza-lima-svg-13081.svg" width="30" height="30" title="Alianza Lima" />
                                    </div>
                                    <div class="placar-box">
                                        <span class="placar-box__valor placar-box__valor--mandante">1</span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-mandante"></span>
                                        <span class="placar-box__versus">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="scoreboard-vs-icon" width="100%" height="100%">
                                                <line x1="-3" x2="100" y1="1" y2="100" stroke="#555" stroke-width="5"></line>
                                                <line x1="-3" x2="100" y1="100" y2="1" stroke="#555" stroke-width="5"></line>
                                            </svg>
                                        </span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-visitante"></span>
                                        <span class="placar-box__valor placar-box__valor--visitante">1</span>
                                    </div>
                                    <div class="placar__equipes placar__equipes--visitante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Colo-Colo" />
                                        <meta itemprop="startDate" content="2024-05-15T21:00" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <img class="equipes__escudo equipes__escudo--visitante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2023/05/01/Colo-Colo.svg" width="30" height="30" title="Colo-Colo" />
                                        <span class="equipes__sigla" title="Colo-Colo">COL</span>
                                        <span class="equipes__nome">Colo-Colo</span>
                                    </div>
                                </div>
                            </div>
                            <span class="jogo__transmissao--broadcast" style="color: rgb(6, 170, 72); background-color: transparent;">saiba como foi</span>
                        </a>
                    </div>
                </li>
                <li class="lista-jogos__jogo">
                    <div class="jogo theme" itemscope="" itemtype="http://schema.org/SportsEvent">
                        <meta itemprop="name" content="Fluminense x Cerro Porteño" />
                        <meta itemprop="startDate" content="2024-05-16T19:00" />
                        <meta itemprop="location" content="América do Sul" />
                        <a class="jogo__transmissao--link" href="https://ge.globo.com/futebol/libertadores/jogo/16-05-2024/fluminense-cerro-porteno.ghtml">
                            <div>
                                <div class="jogo__informacoes">
                                    <span class="jogo__informacoes--local">Maracanã</span>
                                    <span class="jogo__informacoes--data">16/05</span>
                                    <span class="jogo__informacoes--data">Quinta</span>
                                    <span class="jogo__informacoes--hora">19:00</span>
                                </div>
                                <div class="placar">
                                    <div class="placar__equipes placar__equipes--mandante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Fluminense" />
                                        <meta itemprop="startDate" content="2024-05-16T19:00" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <span class="equipes__sigla" title="Fluminense">FLU</span>
                                        <span class="equipes__nome">Fluminense</span>
                                        <img class="equipes__escudo equipes__escudo--mandante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg" width="30" height="30" title="Fluminense" />
                                    </div>
                                    <div class="placar-box">
                                        <span class="placar-box__valor placar-box__valor--mandante">2</span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-mandante"></span>
                                        <span class="placar-box__versus">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="scoreboard-vs-icon" width="100%" height="100%">
                                                <line x1="-3" x2="100" y1="1" y2="100" stroke="#555" stroke-width="5"></line>
                                                <line x1="-3" x2="100" y1="100" y2="1" stroke="#555" stroke-width="5"></line>
                                            </svg>
                                        </span>
                                        <span class="placar-box__valor placar-box__penaltis placar-box__penaltis-visitante"></span>
                                        <span class="placar-box__valor placar-box__valor--visitante">1</span>
                                    </div>
                                    <div class="placar__equipes placar__equipes--visitante" itemprop="performer" itemscope="" itemtype="http://schema.org/SportsTeam">
                                        <meta itemprop="name" content="Cerro Porteño" />
                                        <meta itemprop="startDate" content="2024-05-16T19:00" />
                                        <meta itemprop="location" content="América do Sul" />
                                        <img class="equipes__escudo equipes__escudo--visitante" itemprop="image" src="https://s.sde.globo.com/media/organizations/2024/03/26/CERRO_PORTEÑO.svg" width="30" height="30" title="Cerro Porteño" />
                                        <span class="equipes__sigla" title="Cerro Porteño">CCP</span>
                                        <span class="equipes__nome">Cerro Porteño</span>
                                    </div>
                                </div>
                            </div>
                            <span class="jogo__transmissao--broadcast" style="color: rgb(6, 170, 72); background-color: transparent;">saiba como foi</span>
                        </a>
                    </div>
                </li>
            `
        },
        // Adicione mais rodadas conforme necessário
    ];

    function atualizarRodada() {
        rodadaAtual.textContent = rodadas[index].rodada;
        document.querySelector(".lista-jogos").innerHTML = rodadas[index].jogos;
    }

    prev.addEventListener("click", function () {
        if (index < rodadas.length - 1) {
            index++;
            atualizarRodada();
        }
    });

    next.addEventListener("click", function () {
        if (index > 0) {
            index--;
            atualizarRodada();
        }
    });

    // Inicializar a rodada atual
    atualizarRodada();
});
